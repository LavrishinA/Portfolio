import StyledSection from "./Section";
import Container from "./Container";
import FlexContainer from "../FlexContainer";
import StyledPhoto from "../Photo";
import HeroText from "../HeroText";
import styled from "styled-components";
import theme from "../Theme";
import photoavatar from "../../assets/images/photovatar.png";
import {CommonProps} from "../CommonProps";

const StyledHeroContent = styled(FlexContainer)`
  
  @media ${theme.media.mobile} {
    flex-direction: column-reverse;
   }
`

const HeroSection = (props: CommonProps) => {
    return (
        <StyledSection id="hero">
            <Container>
                <StyledHeroContent gap={124} justify={"space-between"} >
                    <HeroText {...props}/>
                    <StyledPhoto width={280} height={320} src={photoavatar} alt={"my photo"}/>
                </StyledHeroContent>
            </Container>
        </StyledSection>
    );
};

export default HeroSection;