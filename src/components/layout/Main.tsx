import React from 'react';
import StyledSection from "./Section";
import Container from "./Container";
import SectionTag from "../SectionTag";
import SectionDescription from "../SectionDescription";
import SkillList from "../SkillList";
import ExperienceList from "../ExperienceList";
import ProjectList from "../ProjectList";
import TestimonialsList from "../TestimonialsList";
import Contacts from "../Contacts";
import HeroSection from "./StyledHeroSection";
import AboutSection from "./StyledAboutSection";
import {CommonProps} from "../CommonProps";
import theme from "../Theme";

import Backgroundvideo from "./Backgroundvideo";

const Main = (props: CommonProps) => {
    return (
        <main>
            <HeroSection  {...props}/>

            <AboutSection {...props}/>

            <StyledSection id="skills">
                <Container>
                    <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>Skills</SectionTag>
                    <SectionDescription>The skills, tools and technologies I am own:</SectionDescription>
                    <SkillList/>
                </Container>
            </StyledSection>

            <StyledSection id="experience">
                <Container>
                    <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>Experience</SectionTag>
                    <SectionDescription>Here is a quick summary of my experiences:</SectionDescription>
                    <ExperienceList itemBg={theme[props.currentTheme].itemBg}
                                    headingColor={theme[props.currentTheme].h4color}/>
                </Container>
            </StyledSection>

            <StyledSection id="work">
                <Container>
                    <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>Work</SectionTag>
                    <SectionDescription>Some of the projects I have built:</SectionDescription>
                    <ProjectList secondaryBg={theme[props.currentTheme].secondaryBg}
                                 stackBg={theme[props.currentTheme].sectionTagBg}
                                 iconColor={theme[props.currentTheme].svgStroke}
                                 projectBgSecondary={theme[props.currentTheme].projectItemColorSecondary}
                    />
                </Container>
            </StyledSection>

            <StyledSection id="testimonials">
                <Container>
                    <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>Testimonials</SectionTag>
                    <SectionDescription>People about me: </SectionDescription>
                    <TestimonialsList itemBg={theme[props.currentTheme].itemBg}/>
                </Container>
            </StyledSection>

            <StyledSection id="contacts" style={{position: "relative", opacity: 0.99}}>
                <Backgroundvideo/>
                <Container>
                    <SectionTag bgcolor={theme[props.currentTheme].sectionTagBg}>Contacts</SectionTag>
                    <SectionDescription>
                        What's next? Contact me if you are looking for a developer, have a question, or
                        just want to get in touch.
                    </SectionDescription>
                    <Contacts {...props}/>
                </Container>
            </StyledSection>
        </main>

    );
};


export default Main;

