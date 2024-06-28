import styled from "styled-components"

const SectionSubtitle = styled.h3`
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.lightText};
`

const InlineFlex = styled.div`
    display: flex;
    align-items: center;
    ${SectionSubtitle} {
        margin-bottom: 0;
    }
`

const InlineFlexWords = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const SectionSynonyms = styled.li`
    font-size: 22px;
    font-weight: 600;
    margin-left: 25px;
    text-transform: lowercase;
    color: ${({ theme }) => theme.primary};
`

const SynonymsList = ({ synonyms, title }: any) => {
    return <>
        {(synonyms && synonyms.length > 0) &&
            <InlineFlex >
                <SectionSubtitle>{title}</SectionSubtitle>
                <InlineFlexWords>
                    {synonyms.map((synonym: any, index: number) => <SectionSynonyms key={index}>{synonym}</SectionSynonyms>)}
                </InlineFlexWords>
            </InlineFlex >
        }
    </>
}

export default SynonymsList;