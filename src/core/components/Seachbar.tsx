import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { DictionaryContext } from "../../context";
import { useDebounce } from "use-debounce";
import { darkTheme } from "../../styles/themes";

const SearchWrapper = styled.div`
    position: relative;
`

const SearchIcon = styled.div`
    position: absolute;
    top: 46%;
    right: 22px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    .feather {
        width: 20px;
        stroke: ${({ theme }) => theme.primary};
        filter: ${({ theme }) => theme !== darkTheme ? theme.filterImage : 'none'};
    }
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
        <SearchIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </SearchIcon>
        <SearchInput value={searchText} type="text" placeholder="Search the word here!" onChange={(e) => setSearchText(e.target.value)} />
    </SearchWrapper>
}

export default Searchbar;