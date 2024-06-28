import styled from "styled-components";
import iconSearch from "/search.svg";
import { useContext, useEffect, useState } from "react";
import { DictionaryContext } from "../../context";
import { useDebounce } from "use-debounce";

const SearchWrapper = styled.div`
    position: relative;
`

const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 22px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background: url(${iconSearch}) no-repeat center center/contain;
`

const SearchInput = styled.input`
    height: 62px;
    width: 100%;
    font-size: 22px;
    font-weight: 600;
    border-radius: 16px;
    padding: 0 62px 0 22px;
    background-color: ${({ theme }) => theme.inputBg};
`

const Searchbar = () => {
    const defaultSearchText = "keyboard";
    const [searchText, setSearchText] = useState(defaultSearchText);
    const [debouncedText] = useDebounce(searchText, 600);
    const { getWordInfo } = useContext(DictionaryContext);

    useEffect(() => {
        debouncedText.length > 0 && getWordInfo(debouncedText);
    }, [debouncedText])

    return <SearchWrapper>
        <SearchIcon />
        <SearchInput value={searchText} type="text" placeholder="Search the word here!" onChange={(e) => setSearchText(e.target.value)} />
    </SearchWrapper>
}

export default Searchbar;