import styled from "styled-components";

const SearchResultWrapper = styled.div`
    display: flex;
    margin: 45px 0;
    align-items: center;
    justify-content: space-between;
`

const ResultItem = styled.div`
`

const ResultItemName = styled.h2`
    font-size: 60px;
    font-weight: bold;
`

const ResultItemDescription = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
`

const PlayButton = styled.button`
    position: relative;
    cursor: pointer;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryLight};
    &:after {
        position: absolute;
        content: "";
        inset: 0 0 0 8px;
        width: 20px;
        height: 20px;
        margin: auto;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 16px solid ${({ theme }) => theme.primary};
    }
`

const SearchResult = () => {
    return <>
        <SearchResultWrapper>
            <ResultItem>
                <ResultItemName>keyboard</ResultItemName>
                <ResultItemDescription>/'ki:bo:d/</ResultItemDescription>
            </ResultItem>
            <PlayButton></PlayButton>
        </SearchResultWrapper>
    </>
}

export default SearchResult;