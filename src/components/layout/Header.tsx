import styled from "styled-components";
import Logo from "../Logo";
import FlexContainer from "./FlexContainer";
import Container from "./Container";
import Nav from "../Nav";

const StyledHeader = styled.header`
  height: 68px;
  padding: 16px;
  background-color: yellowgreen;
  
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