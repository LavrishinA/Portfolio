import styled from "styled-components";
import StyledItemHeading from "./ItemHeading";
import FlexContainer from "./FlexContainer";
import Link from "./Link";
import {StyledSectionTag} from "./SectionTag";
import Icon from "./Icon";

type ProjectItemProps = {
    name: string
    img: string
    text: string
    link: string
    stack: string[]
    num: number
    stackBg?: string
    iconColor?: string
    itemBg?: string
    projectBgSecondary?: string
}


type ProjectItemContainerProps = {
    background?: boolean
    itemBg?: string
    projectBgSecondary?: string

}

const StyledProjectItemContainer = styled(FlexContainer)<ProjectItemContainerProps>`
  align-self: stretch;
  padding: 12px;
  flex-basis: 585px;
  background-color: ${props =>  props.background && props.itemBg || props.projectBgSecondary};
  border-radius: 5px;
`
const StyledProjectPhoto = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 4px 3px 0 rgba(0, 0, 0, 0.07);
`

const ProjectFlexContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 4px 3px 0 rgba(0, 0, 0, 0.07);
`

const StyledStackTag = styled(StyledSectionTag)`
  margin: 0;
`


const ProjectItem = (props: ProjectItemProps) => {

    return (
        <ProjectFlexContainer direction={props.num % 2 === 0 ? "row-reverse" : ""}>
            <StyledProjectItemContainer projectBgSecondary={props.projectBgSecondary} background itemBg={props.itemBg}>
                <StyledProjectPhoto src={props.img} alt={"project screenshot"}/>
            </StyledProjectItemContainer>
            <StyledProjectItemContainer projectBgSecondary={props.projectBgSecondary} direction={"column"} align={"flex-start"} gap={24}>
                <StyledItemHeading >{props.name}</StyledItemHeading>
                <p>
                    {props.text}
                </p>
                <FlexContainer justify={"flex-start"} gap={8} wrap={"wrap"} as={"ul"}>
                    {props.stack.map((li, i) => <StyledStackTag bgcolor={props.stackBg} key={i}>{li}</StyledStackTag>)}
                </FlexContainer>
                <Link href={props.link}>
                    <Icon color={props.iconColor} iconId={"link"}/>
                </Link>
            </StyledProjectItemContainer>
        </ProjectFlexContainer>

    );
};

export default ProjectItem;
