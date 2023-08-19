import React from 'react';
import StyledSection from "./Section";
import FlexContainer from "../FlexContainer";
import Container from "./Container";
import StyledPhoto from "../Photo";
import photoavatar from "../../assets/images/photovatar.png"
import photo from "../../assets/images/photo.jpg"
import SectionTag from "../SectionTag";
import SectionDescription from "../SectionDescription";
import SkillList from "../SkillList";
import ExperienceList from "../ExperienceList";
import HeroText from "../HeroText";
import ProjectList from "../ProjectList";


const Main = () => {
    return (
        <main>
            <StyledSection id="hero">
                <Container>
                    <FlexContainer gap={124} justify={"space-between"}>
                        <HeroText/>
                        <StyledPhoto width={280} height={320} src={photoavatar}/>
                    </FlexContainer>
                </Container>
            </StyledSection>

            <StyledSection bgcolor={"#F9FAFB"}>
                <Container>
                    <SectionTag>About Me</SectionTag>
                    <FlexContainer justify={"space-between"}>
                        <StyledPhoto shadowLeft width={360} height={480} src={photo}/>
                        <h3>Curious about me? Here you have it: {`<Soon />`}</h3>
                    </FlexContainer>
                </Container>
            </StyledSection>

            <StyledSection id="skills">
                <Container>
                    <SectionTag>Skills</SectionTag>
                    <SectionDescription>The skills, tools and technologies I am own:</SectionDescription>
                    <SkillList/>
                </Container>
            </StyledSection>

            <StyledSection id="experience" bgcolor={"#F9FAFB"}>
                <SectionTag>Experience</SectionTag>
                <SectionDescription>Here is a quick summary of my experiences:</SectionDescription>
                <ExperienceList/>
            </StyledSection>

            <StyledSection id="work">
                <Container>
                    <SectionTag>Work</SectionTag>
                    <SectionDescription>Some of the projects I have built:</SectionDescription>
                    <ProjectList/>
                </Container>
            </StyledSection>
        </main>
    );
};


export default Main;

