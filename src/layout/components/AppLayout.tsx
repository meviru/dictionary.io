import styled, { ThemeProvider } from "styled-components";
import Header from "../../core/components/Header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/themes";
import MainContent from "./MainContent";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 780px;
`

const AppLayout = () => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Container>
                <Header setTheme={setTheme} />
                <MainContent />
            </Container>
        </ThemeProvider>
    )
}

export default AppLayout;