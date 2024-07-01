import { motion } from "framer-motion";
import styled from "styled-components";
import iconLink from "/external-link.svg";

const SourceListWrapper = styled.div`
    display: flex;
    padding-top: 20px;
    margin-top: 40px;
    border-top: 1px solid ${({ theme }) => theme.border};
`

const SectionSubtitle = styled.h3`
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.lightText};
`

const SectionList = styled.ul`
    margin-left: 25px;
`

const SectionListItem = styled.li`
    font-size: 16px;
    & + & {
        margin-top: 8px;
    }
`
const SectionListLink = styled.a`
    font-size: 16px;
    display: flex;
    align-items: center;
`

const SectionListIcon = styled.img`
    width: 15px;
    margin-left: 8px;
    margin-bottom: 3px;
    filter: ${({ theme }) => theme.filterImage};
`

const SourceList = ({ sources }: any) => {
    return <SourceListWrapper as={motion.section} initial={{ y: 20 }} animate={{ y: 0 }}>
        <SectionSubtitle>Source</SectionSubtitle>
        <SectionList>
            {sources.map((source: string, index: number) => (
                <SectionListItem key={index}>
                    <SectionListLink href={`${source}`} target="_blank">{source} <SectionListIcon src={iconLink} alt="link" /></SectionListLink>
                </SectionListItem>
            ))}
        </SectionList>
    </SourceListWrapper>
}

export default SourceList;