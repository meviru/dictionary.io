import Searchbar from "../../core/components/Seachbar";
import ResultList from "../../shared/components/ResultList";

const MainContent = () => {
    return <>
        <Searchbar />
        <ResultList title="noun" synonyms="electronic keyboard" />
        <ResultList title="verb" synonyms="electronic keyboard" />
    </>
}

export default MainContent;