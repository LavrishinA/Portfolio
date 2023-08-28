import Nav from "./Nav";
import styled from "styled-components";
import theme from "../Theme";

const StyledDesktopNav = styled.nav`

  @media ${theme.media.mobile} {
    display: none;
  }
`
const DesktopNav = () => {

    return (
        <StyledDesktopNav>
            <Nav/>
        </StyledDesktopNav>
    )
}


export default DesktopNav;