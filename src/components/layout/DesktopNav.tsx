import Nav from "./Nav";
import styled from "styled-components";
import theme from "../Theme";
import {CommonProps} from "../CommonProps";

const StyledDesktopNav = styled.nav`

  @media ${theme.media.mobile} {
    display: none;
  }
`
type HeaderProps = {
    onSwitchTheme: () => void
}
const DesktopNav = (props: CommonProps) => {

    return (
        <StyledDesktopNav>
            <Nav {...props}/>
        </StyledDesktopNav>
    )
}


export default DesktopNav;