import styled from "styled-components";
import { Definition, Meaning } from "../../models";

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

const SectionList = styled.ul`
    margin-bottom: 40px;
`

const SectionListItem = styled.li`
    position: relative;
    padding-left: 45px;
    vertical-align: middle;
    & + & {
        margin-top: 15px;
    }
    &:before {
        position: absolute;
        content: "";
        left: 20px;
        top: 8px;
        z-index: 2;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primary};
    }
`

const InlineFlex = styled.div`
    display: flex;
    align-items: center;
    ${SectionSubtitle} {
        margin-bottom: 0;
    }
`

const SectionSynonyms = styled.div`
    display: flex;
    font-size: 22px;
    font-weight: 600;
    margin-left: 25px;
    align-items: center;
    color: ${({ theme }) => theme.primary};
`

const SectionExample = styled.p`
    font-size: 16px;
    margin-top: 5px;
    color: ${({ theme }) => theme.lightText};
`

const ResultList = ({ meainings }: { meainings: Meaning[] | undefined }) => {

    const capitalizeString = (string: string) => {
        return string.charAt(0).toUpperCase() + string.substring(1, string.length);
    }

    return <>
        {(meainings && meainings?.length > 0) && meainings?.map((meaning: Meaning, index: number) =>
            <Section key={index}>
                <SectionHeader>
                    <SectionTitle>{meaning.partOfSpeech}</SectionTitle>
                </SectionHeader>
                <SectionSubtitle>Meaning</SectionSubtitle>
                <SectionList>
                    {(meaning && meaning.definitions.length > 0) && meaning.definitions.map((item: Definition, index: number) =>
                        <SectionListItem key={index}>
                            {item.definition}
                            {item.example &&
                                <SectionExample>(Example: {item.example})</SectionExample>
                            }
                        </SectionListItem>
                    )}
                </SectionList>
                {(meaning.antonyms && meaning.antonyms.length > 0) &&
                    <InlineFlex >
                        <SectionSubtitle>Antonyms</SectionSubtitle>
                        {meaning.antonyms.map((antonym, index) => <SectionSynonyms key={index}>{capitalizeString(antonym)}</SectionSynonyms>)}
                    </InlineFlex >
                }
                {(meaning.synonyms && meaning.synonyms.length > 0) &&
                    <InlineFlex >
                        <SectionSubtitle>Synonyms</SectionSubtitle>
                        {meaning.synonyms.map((synonym, index) => <SectionSynonyms key={index}>{capitalizeString(synonym)}</SectionSynonyms>)}
                    </InlineFlex >
                }
            </Section >
        )}
    </>
}

export default ResultList;