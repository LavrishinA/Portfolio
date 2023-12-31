import styled from "styled-components";
import FlexContainer from "../FlexContainer";
import Container from "./Container";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {CommonProps} from "../CommonProps";
import theme from "../Theme";


const StyledHeader = styled.header`
  padding: 16px;

  @media ${theme.media.mobile} {
    padding: 0;
  }
`

function Header(props: CommonProps) {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between">
                    <Logo>{`<AL />`}</Logo>

                    <DesktopNav {...props}/>
                    <MobileNav {...props}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
}

export default Header;
