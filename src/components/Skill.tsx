import styled from "styled-components";
import Icon from "./Icon";
import theme from "./Theme";

type SkillProps = {
    iconid: string
    caption: string
}

const StyledFigure = styled.figure`
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  

  @media ${theme.media.mobile} {
    flex-basis: 33%;
  }
`

const Skill = (props: SkillProps) => {
    return (
        <StyledFigure>
            < Icon
                width={"64"}
                height={"64"}
                iconId={props.iconid}
            />
            <figcaption>{props.caption}</figcaption>
        </StyledFigure>
    );
};

export default Skill;