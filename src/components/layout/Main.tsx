import React from 'react';
import styled from "styled-components";
import StyledSection from "./Section";
import FlexContainer from "../FlexContainer";
import Icon from "../Icon";
import photo from "../../assets/images/photovatar.png"
import SectionTag from "../SectionTag";
import SectionDescription from "../SectionDescription";

const Main = () => {
    return (
        <StyledMain>
            <StyledSection as={"section"} id="hero">
                <FlexContainer justify={"space-between"}>
                    <div>
                        <span>Hi, I’m Alex 👋</span>
                        <h1>Front-end developer</h1>
                        <span> <Icon iconId={"location"}/> Belarus, Homel</span>
                        <ul>
                            <li><a><Icon iconId={"github"}/></a></li>
                            <li><a><Icon iconId={"linkedin"}/></a></li>
                        </ul>
                    </div>
                    <Photo src={photo}/>
                </FlexContainer>
            </StyledSection>
            <StyledSection as={"section"} id="skills">
                <SectionTag>Skills</SectionTag>
                <SectionDescription>The skills, tools and technologies I am own:</SectionDescription>
                <FlexContainer justify={"space-around"}>
                    <Icon width={"64"} height={"64"} iconId={"html"}/>
                    <Icon width={"64"} height={"64"} iconId={"css"}/>
                    <Icon width={"64"} height={"64"} iconId={"js"}/>
                    <Icon width={"64"} height={"64"} iconId={"react"}/>
                    <Icon width={"64"} height={"64"} iconId={"typescript"}/>
                    <Icon width={"64"} height={"64"} iconId={"git"}/>
                    <Icon width={"64"} height={"64"} iconId={"styled"}/>
                </FlexContainer>
            </StyledSection>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: lightpink;
`

const Photo = styled.img`
  width: 280px;
  height: 320px;
  object-fit: cover;
`

export default Main;