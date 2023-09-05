import FlexContainer from "../FlexContainer";
import Icon from "../Icon";
import {CommonProps} from "../CommonProps";
import theme from "../Theme";
import styled from "styled-components";

const StyledLi = styled.li`


@media screen and (min-width: 1140px) {
  transition: .3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
}`

const Nav = (props: CommonProps) => {

    return (
        <FlexContainer gap={48}>
            <FlexContainer as="ul" gap={24} onClick={props.closeNav}>
                <StyledLi><a href="#about">About</a></StyledLi>
                <StyledLi><a href="#skills">Skills</a></StyledLi>
                <StyledLi><a href="#experience">Experience</a></StyledLi>
                <StyledLi><a href="#work">Projects</a></StyledLi>
                <StyledLi><a href="#testimonials">Testimonials</a></StyledLi>
                <StyledLi><a href="#contacts">Contacts</a></StyledLi>
            </FlexContainer>
            <FlexContainer as="div" gap={22}>
                <button onClick={props.onSwitchTheme} style={{cursor: "pointer"}}>
                    <Icon  color={theme[props.currentTheme].svgStroke} iconId={"light-mode"}/>
                </button>
                <button>Download CV</button>
            </FlexContainer>
        </FlexContainer>
    )
}


export default Nav;