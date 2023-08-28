import FlexContainer from "./FlexContainer";
import Skill from "./Skill";
import styled from "styled-components";
import theme from "./Theme";

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

const StyledSkillList = styled(FlexContainer)`
  @media ${theme.media.mobile} {
    row-gap: 32px;
  }
`


const SkillList = () => {
    return (
        <StyledSkillList justify={"space-between"} wrap={"wrap"}>
            {skillsData.map(props => <Skill key={props.iconid} {...props}/>)}
        </StyledSkillList>
    );
};

export default SkillList;