import styled from "styled-components";
import FlexContainer from "./FlexContainer";

type SectionTagProps = {
    children: string
    color?: string
    bgcolor?: string
}

export const StyledSectionTag = styled.h2<SectionTagProps>`
  margin: 0 auto 16px;
  padding: 4px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.color || "#4B5563"};
  background-color: ${props => props.bgcolor || "#E5E7EB"};
  border-radius: 12px;
`

const SectionTag = (props: SectionTagProps) => {
    return (
        <FlexContainer>
            <StyledSectionTag {...props}>{props.children}</StyledSectionTag>
        </FlexContainer>
    );
};

export default SectionTag;