import styled from "styled-components";
import { Definition } from "../../models";

const SectionList = styled.ul`
    margin-bottom: 40px;
`

const SectionListItem = styled.li`
    position: relative;
    padding-left: 45px;
    vertical-align: middle;
    & + & {
        margin-top: 18px;
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

const SectionExample = styled.p`
    font-size: 16px;
    margin-top: 8px;
    color: ${({ theme }) => theme.lightText};
`


const DefinationsList = ({ definitions }: any) => {
    return <SectionList>
        {(definitions.length > 0) && definitions.map((item: Definition, index: number) =>
            <SectionListItem key={index}>
                {item.definition}
                {item.example &&
                    <SectionExample>“{item.example}”</SectionExample>
                }
            </SectionListItem>
        )}
    </SectionList>
}

export default DefinationsList;