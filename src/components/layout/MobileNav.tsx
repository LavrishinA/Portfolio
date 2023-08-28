import {useState} from "react";
import Nav from "./Nav";
import Icon from "../Icon";
import styled from "styled-components";
import theme from "../Theme";

type MobileNavProps = {
    open: boolean;
}


const StyledMobileNav = styled.nav<MobileNavProps>`
  display: none;
  height: 100vh;
  width: 100%;
  background-color: rgba(249, 250, 251, 0.9);
  transition: all .3s ease;

  @media ${theme.media.mobile} {
    position: fixed;
    right: ${props => props.open ? "0" : "-100%"};
    top: 100px;
    display: block;
    
    ul {
      flex-direction: column;
    }

    div {
      flex-direction: column;
    }
  }

`

const StyledBurger = styled.button`
  display: none;
  @media ${theme.media.mobile} {
    display: block;
  }
`
const MobileNav = () => {
    const [openNav, setOpenNav] = useState(false);

    function handleBurgerClick() {
        setOpenNav(prevState => !prevState);
        document.body.style.overflow = `${openNav ? "" : "hidden"}`
    }

    return (
        <>
            <StyledMobileNav open={openNav}><Nav/></StyledMobileNav>
            <StyledBurger onClick={handleBurgerClick}>
                <Icon iconId={openNav ? "menuclose" : "menu"}/>
            </StyledBurger>
        </>
    )
}


export default MobileNav