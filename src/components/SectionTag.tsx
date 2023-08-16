import styled from "styled-components";

type StyledSectionTagProps = {
    children: string
    color?: string
    bgcolor?: string
}

const StyledSectionTag = styled.h2<StyledSectionTagProps>`
  text-align: center;
  width: 105px;
  margin: 0 auto 16px;
  padding: 4px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.color || "#4B5563"};
  background-color: ${props => props.bgcolor || "#E5E7EB"};
  border-radius: 12px;
`

const SectionTag = (props: StyledSectionTagProps) => {
    return (
        <>
            <StyledSectionTag {...props}>{props.children}</StyledSectionTag>
        </>
    );
};

export default SectionTag;