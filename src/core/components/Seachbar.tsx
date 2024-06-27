import styled from "styled-components";
import iconSearch from "/search.svg";

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
    return <SearchWrapper>
        <SearchIcon />
        <SearchInput type="text" placeholder="keyboard" />
    </SearchWrapper>
}

export default Searchbar;