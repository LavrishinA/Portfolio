import FlexContainer from "./FlexContainer";
import Skill from "./Skill";

const skillsData = [
    {
        iconid: "html",
        caption: "HTML"
    },
    {
        iconid: "css",
        caption: "CSS"
    },
    {
        iconid: "js",
        caption: "JavaScript"
    },
    {
        iconid: "react",
        caption: "React"
    },
    {
        iconid: "typescript",
        caption: "TypeScript"
    },
    {
        iconid: "git",
        caption: "GIT"
    },
    {
        iconid: "styled",
        caption: "Styled Components"
    },
]
const SkillList = () => {
    return (
        <FlexContainer justify={"space-around"}>
            {skillsData.map(props =>  <Skill key={props.iconid} {...props}/>)}
        </FlexContainer>
    );
};

export default SkillList;