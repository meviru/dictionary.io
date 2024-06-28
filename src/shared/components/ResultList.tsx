import styled from "styled-components";
import { Definition, Meaning } from "../../models";
import { motion } from "framer-motion";
import SynonymsList from "./SynonymsList";
import DefinationsList from "./DefinationsList";

const Section = styled.section`
    & + & {
        margin-top: 35px;
    }
`

const SectionHeader = styled.div`
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
    &::after {
        position: absolute;
        content: "";
        height: 1px;
        inset: 0;
        right: 5px;
        z-index: -1;
        margin: auto;
        background-color: ${({ theme }) => theme.border};
    }
`

const SectionTitle = styled.h2`
    font-style: italic;
    font-size: 25px;
    padding-right: 22px;
    display: inline-block;
    background-color: ${({ theme }) => theme.body};
`

const SectionSubtitle = styled.h3`
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.lightText};
`

const ResultList = ({ meainings }: { meainings: Meaning[] | undefined }) => {
    return <>
        {(meainings && meainings?.length > 0) && meainings?.map((meaning: Meaning, index: number) =>
            <Section as={motion.section} initial={{ y: 20 }} animate={{ y: 0 }} key={index}>
                <SectionHeader>
                    <SectionTitle>{meaning.partOfSpeech}</SectionTitle>
                </SectionHeader>
                <SectionSubtitle>Meaning</SectionSubtitle>
                <DefinationsList definitions={meaning.definitions} />
                <SynonymsList title="Antonyms" synonyms={meaning.antonyms} />
                <SynonymsList title="Synonyms" synonyms={meaning.synonyms} />
            </Section >
        )}
    </>
}

export default ResultList;