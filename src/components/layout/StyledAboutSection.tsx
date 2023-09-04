import React from 'react';
import Container from "./Container";
import FlexContainer from "../FlexContainer";
import StyledPhoto from "../Photo";
import SectionTag from "../SectionTag";
import photo from "../../assets/images/photo.jpg";
import styled from "styled-components";
import StyledSection from "./Section";
import theme from "../Theme";
import {CommonProps} from "../CommonProps";


const StyledAboutContent = styled(FlexContainer)`
  
  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 64px;
  }
`

const AboutSection = (props: CommonProps) => {
    return (
        <StyledSection id="about">
            <Container>
                <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>About Me</SectionTag>
                <StyledAboutContent justify={"space-between"}>
                    <StyledPhoto shadowLeft width={360} height={480} src={photo} alt={"my photo"}/>
                    <h3>Curious about me? Here you have it: {`<Soon />`}</h3>
                </StyledAboutContent>
            </Container>
        </StyledSection>
    );
};

export default AboutSection;