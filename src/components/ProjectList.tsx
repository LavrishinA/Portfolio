import React from "react";
import ProjectItem from "./ProjectItem";
import FlexContainer from "./FlexContainer";
import momentum from "../assets/images/momentum.jpg";
import shelter from "../assets/images/shelter.jpg";

const projectsData = [
    {
        name: "Momentum",
        img: momentum,
        text: "Momentum is an analogue of the Chrome Web Store application of the same name. The application shows the time and username. The background image and greeting changes depending on the time of day. The application has a clock, an image slider, weather widgets, an audio player, a quote of the day block. Local storage is used to store the username and location.",
        link: "https://rolling-scopes-school.github.io/lavrishina-JSFEPRESCHOOL2022Q2/momentum/",
        stack: ["HTML", "CSS", "JavaScript"]

    },
    {
        name: "Shelter",
        img: shelter,
        text: "A small landing page about an animal shelter. The project has a dynamic slider. Our pets page has pagination. Also used adaptive and responsive design",
        link: "https://rolling-scopes-school.github.io/lavrishina-JSFE2023Q1/shelter/index.html",
        stack: ["HTML", "CSS", "JavaScript", "HTML", "CSS", "JavaScript","HTML", "CSS", "JavaScript"]
    },
]


const ProjectList = () => {
    return (
        <FlexContainer direction={"column"} gap={48}>
            {projectsData.map((props, i) => <ProjectItem {...props} num = {i + 1}/>)}
        </FlexContainer>
    );
};

export default ProjectList;