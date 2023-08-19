import React from 'react';
import styled from "styled-components";
import Container from "./Container";
import Icon from "../Icon";
import FlexContainer from "../FlexContainer";


const StyledSlogan = styled.p`
  padding: 12px;
  font-size: 32px;
  font-weight: 600;
  background: linear-gradient(to right, #959595 0%, #1B1B1B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledFooter = styled.footer`
  padding: 26px 0;
  text-align: center;
  background-color: #F9FAFB;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer>
                    <Icon width={"68"} height={"68"} iconId={"samurai"}/>
                    <StyledSlogan> The samurai has no goal, only the path.</StyledSlogan>
                </FlexContainer>
            </Container>
        </StyledFooter>
    );
};

export default Footer;