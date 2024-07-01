import styled, { ThemeProvider } from "styled-components";
import Header from "../../core/components/Header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useContext, useState } from "react";
import { darkTheme, dawnTheme, lightTheme } from "../../styles/themes";
import MainContent from "./MainContent";
import { DictionaryContext } from "../../context";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 780px;
`

const AppLayout = () => {
    const [theme, setTheme] = useState('light');
    const { font } = useContext(DictionaryContext);

    const getTheme = (themeName: string) => {
        switch (themeName) {
            case 'dark':
                return darkTheme;
            case 'dawn':
                return dawnTheme;
            default:
                return lightTheme;
        }
    }

    return (
        <ThemeProvider theme={{ ...getTheme(theme), font: font }}>
            <GlobalStyles />
            <Container>
                <Header setTheme={setTheme} />
                <MainContent />
            </Container>
        </ThemeProvider>
    )
}

export default AppLayout;