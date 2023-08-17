import styled from "styled-components";

type StyledSectionProps = {
    bgcolor?: string
}

const StyledSection = styled.section<StyledSectionProps>`
padding: 96px 0;
  background-color: ${props => props.bgcolor || "#fff"};
  
`

export default StyledSection;