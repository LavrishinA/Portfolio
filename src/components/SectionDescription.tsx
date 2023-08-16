import styled from "styled-components";
import Section from "./layout/Section";

type SectionDescriptionProps = {
    children: string
}

const StyledSectionDescription = styled.p`
  margin-bottom: 48px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`

const SectionDescription = (props: SectionDescriptionProps) => {
    return (
        <StyledSectionDescription>
            {props.children}
        </StyledSectionDescription>
    );
};

export default SectionDescription;