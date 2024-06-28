import styled from "styled-components";
import Searchbar from "../../core/components/Seachbar";
import ResultList from "../../shared/components/ResultList";
import SearchResult from "../../core/components/SearchResult";
import { useContext } from "react";
import { DictionaryContext } from "../../context";

const Main = styled.main`
`

const MainContent = () => {
    const { dictionary } = useContext(DictionaryContext);
    return <>
        <Main>
            <Searchbar />
            <SearchResult dictionary={dictionary}></SearchResult>
            <ResultList meainings={dictionary.meanings} />
        </Main>
    </>
}

export default MainContent;