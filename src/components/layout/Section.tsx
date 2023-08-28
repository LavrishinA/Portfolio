import styled from "styled-components";
import theme from "../Theme";


type StyledSectionProps = {
    bgcolor?: string
}

const StyledSection = styled.section<StyledSectionProps>`
  padding: 96px 0;

  @media ${theme.media.mobile} {
    padding: 64px 0;
  }
`

export default StyledSection;