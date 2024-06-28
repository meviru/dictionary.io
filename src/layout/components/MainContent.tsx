import styled from "styled-components";
import Searchbar from "../../core/components/Seachbar";
import ResultList from "../../shared/components/ResultList";
import SearchResult from "../../core/components/SearchResult";
import { useContext } from "react";
import { DictionaryContext } from "../../context";
import SourceList from "../../shared/components/SourceList";

const Main = styled.main`
    padding-bottom: 120px;
`

const MainContent = () => {
    const { dictionary } = useContext(DictionaryContext);
    return <>
        <Main>
            <Searchbar />
            <SearchResult dictionary={dictionary}></SearchResult>
            <ResultList meainings={dictionary.meanings} />
            {dictionary.sourceUrls && dictionary.sourceUrls.length > 0 &&
                <SourceList sources={dictionary.sourceUrls} />
            }
        </Main>
    </>
}

export default MainContent;