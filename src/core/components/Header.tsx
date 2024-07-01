import styled from "styled-components";
import FontsDropdown from "./FontsDropdown";
import bookLogo from "/book-svgrepo-com.svg";
import iconMoon from "/moon-svgrepo-com.svg";
import iconSun from "/sun-svgrepo-com.svg";
import iconDawn from "/sunrise-8746.svg";
import { Dispatch, SetStateAction, useState } from "react";

const HeaderWrapper = styled.header`
    display: flex;
    padding: 52px 0;
    align-items: center;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    width: 45px;
`

const LogoLink = styled.a`
    display: block;
`

const Logo = styled.img`
    display: block;
    filter: ${(({ theme }) => theme.filterImage)};
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
    filter: ${(({ theme }) => theme.filterImage)};
`

const themes = ['light', 'dark', 'dawn'];
const icons = [iconMoon, iconDawn, iconSun];
const altTitles = ['Dark mode', 'Dawn mode', 'Light mode'];

const Header = ({ setTheme }: { setTheme: Dispatch<SetStateAction<string>> }) => {
    const [themeIndex, setThemeIndex] = useState(0);

    const switchTheme = () => {
        const newThemeIndex = (themeIndex + 1) % themes.length;
        setThemeIndex(newThemeIndex);
        setTheme(themes[newThemeIndex]);
    }

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <LogoLink href="#">
                    <Logo src={bookLogo} alt="Dictionary.io" title="Dictionary.io" />
                </LogoLink>
            </LogoWrapper>
            <RightHeaderItems>
                <FontsDropdown />
                <DarkModeSwitcher>
                    <DarkMode
                        src={icons[themeIndex]}
                        onClick={switchTheme}
                        alt={altTitles[themeIndex]}
                        title={altTitles[themeIndex]}
                    />
                </DarkModeSwitcher>
            </RightHeaderItems>
        </HeaderWrapper >
    )
}

export default Header;