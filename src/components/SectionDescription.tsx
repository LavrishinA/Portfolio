import styled from "styled-components";


type SectionDescriptionProps = {
    children: string
}

const StyledSectionDescription = styled.p`
  margin-bottom: 48px;
  font-size: calc((100vw - 375px) / (1440 - 375) * (20 - 18) + 18px);
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