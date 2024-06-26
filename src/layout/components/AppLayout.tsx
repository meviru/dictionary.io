import styled from "styled-components";
import Header from "../../core/components/Header";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 780px;
`

const AppLayout = () => {
    return (
        <Container>
            <Header />
        </Container>
    )
}

export default AppLayout;