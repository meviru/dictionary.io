import styled from "styled-components";
import FontsDropdown from "./FontsDropdown";
import bookLogo from "/book-svgrepo-com.svg";
import iconMoon from "/moon-svgrepo-com.svg";
import iconSun from "/sun-svgrepo-com.svg";
import { useState } from "react";

const HeaderWrapper = styled.header`
    display: flex;
    padding: 52px 0;
    align-items: center;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    width: 45px;
`

const Logo = styled.img`
    display: block;
`

const RightHeaderItems = styled.div`
    display: flex;
    align-items: center;
`

const DarkModeSwitcher = styled.div`
    margin-left: 30px;
`

const DarkMode = styled.img`
    width: 30px;
    margin-top: 3px;
    cursor: pointer;
`

const Header = () => {
    const [darkMode, setDarkMode] = useState(0);

    const switchTheme = () => {
        setDarkMode(darkMode ? 0 : 1);
    }

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo src={bookLogo} alt="Dictionary.io" title="Dictionary.io" />
            </LogoWrapper>
            <RightHeaderItems>
                <FontsDropdown />
                <DarkModeSwitcher>
                    <DarkMode src={!darkMode ? iconMoon : iconSun} onClick={switchTheme} alt="Dark Mode" title="Dark Mode" />
                </DarkModeSwitcher>
            </RightHeaderItems>
        </HeaderWrapper >
    )
}

export default Header;