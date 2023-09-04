import React from 'react';
import styled from "styled-components";
import Container from "./Container";
import FlexContainer from "../FlexContainer";
import Icon from "../Icon";
import theme from "../Theme";


const StyledSlogan = styled.p`
  line-height: 1.3;
  font-size: calc((100vw - 375px) / (1440 - 375) * (36 - 24) + 24px);
  font-weight: 600;
  background: linear-gradient(to right, #959595 0%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledFooter = styled.footer`
  padding: 26px 0;
  text-align: center;


  @media ${theme.media.mobile} {
    padding: 0;
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer>
                    <div>
                        <Icon width={"68"} height={"68"} iconId={"samurai"}/>
                    </div>
                    <StyledSlogan> The samurai has no goal, only the path.</StyledSlogan>
                </FlexContainer>
            </Container>
        </StyledFooter>
    );
};

export default Footer;