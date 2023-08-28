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


const Main = () => {
    return (
        <main>
            <HeroSection/>

            <AboutSection/>

            <StyledSection id="skills">
                <Container>
                    <SectionTag>Skills</SectionTag>
                    <SectionDescription>The skills, tools and technologies I am own:</SectionDescription>
                    <SkillList/>
                </Container>
            </StyledSection>

            <StyledSection id="experience">
                <Container>
                    <SectionTag>Experience</SectionTag>
                    <SectionDescription>Here is a quick summary of my experiences:</SectionDescription>
                    <ExperienceList/>
                </Container>
            </StyledSection>

            <StyledSection id="work">
                <Container>
                    <SectionTag>Work</SectionTag>
                    <SectionDescription>Some of the projects I have built:</SectionDescription>
                    <ProjectList/>
                </Container>
            </StyledSection>

            <StyledSection id="testimonials">
                <Container>
                    <SectionTag>Testimonials</SectionTag>
                    <SectionDescription>People about me: </SectionDescription>
                    <TestimonialsList/>
                </Container>
            </StyledSection>

            <StyledSection id="contacts">
                <Container>
                    <SectionTag>Contacts</SectionTag>
                    <SectionDescription>
                        What's next? Contact me if you are looking for a developer, have a question, or
                        just want to get in touch.
                    </SectionDescription>
                    <Contacts/>
                </Container>
            </StyledSection>
        </main>

    );
};


export default Main;

