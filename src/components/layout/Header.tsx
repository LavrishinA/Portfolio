import styled from "styled-components";
import FlexContainer from "../FlexContainer";
import Container from "./Container";
import Logo from "../Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  padding: 16px;  
`

function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between">
                    <Logo>{`<AL />`}</Logo>
                    <Nav/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
}

export default Header;
