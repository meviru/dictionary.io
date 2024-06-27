import styled from "styled-components";

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
        top: 50%;
        z-index: 2;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primary};
        transform: translateY(-50%);
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

const ResultList = ({ title, synonyms }: { title: string, synonyms: string }) => {
    return (<Section>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
        <SectionSubtitle>Meaning</SectionSubtitle>
        <SectionList>
            <SectionListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SectionListItem>
            <SectionListItem>Debitis officiis alias aspernatur exercitationem tempore, obcaecati quisquam perspiciatis dolor impedit.</SectionListItem>
            <SectionListItem>Accusamus asperiores voluptas expedita? Vero iure architecto reprehenderit repudiandae minima vel.</SectionListItem>
        </SectionList>
        <InlineFlex>
            <SectionSubtitle>Synonyms</SectionSubtitle>
            <SectionSynonyms>{synonyms}</SectionSynonyms>
        </InlineFlex>
    </Section>)
}

export default ResultList;