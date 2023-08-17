import FlexContainer from "./FlexContainer";
import ExperienceItem from "./ExperienceItem";

const ExperienceItemsData = [
    {
        position: "Student",
        iconid: "itincubator",
        data: "Aug 2023 - Present",
        link: "https://it-incubator.io/"
    },
    {
        position: "Student",
        iconid: "rsschool",
        link: "https://rs.school/",
        list: ["Stage 0", "Stage 1"]
    },
    {
        position: "User",
        iconid: "udemy",
        link: "https://www.udemy.com/user/jonasschmedtmann/?kw=jonas+schmedtmann&src=sac",
        list: ["Jonas Schmedtmann: JavaScript Course", "Jonas Schmedtmann: CSS Course", "Jonas Schmedtmann: HTML, CSS course"]
    },
    {
        position: "User: lavrishin_a",
        iconid: "freecodecamp",
        link: "https://www.freecodecamp.org",
        list: ["Points: 682", "JavaScript Algoritms and Data Structure Certification", "Responsive Web Design Certification"],
    },
    {
        position: "User: LavrishinA",
        iconid: "codewars",
        link: "https://www.codewars.com/",
        list: ["Rank: 5 kyu", "Honor: 391", "Total Completed Kata: 96"],
    }
]


const ExperienceList = () => {
    return (
        <FlexContainer direction={"column"} gap={48}>
            {ExperienceItemsData.map(props => <ExperienceItem key={props.iconid} {...props}/>)}
        </FlexContainer>
    );
};

export default ExperienceList;