import styled from "styled-components";
import Searchbar from "../../core/components/Seachbar";
import ResultList from "../../shared/components/ResultList";
import SearchResult from "../../core/components/SearchResult";

const Main = styled.main`
`

const MainContent = () => {
    return <>
        <Main>
            <Searchbar />
            <SearchResult></SearchResult>
            <ResultList title="noun" synonyms="electronic keyboard" />
            <ResultList title="verb" synonyms="electronic keyboard" />
        </Main>
    </>
}

export default MainContent;