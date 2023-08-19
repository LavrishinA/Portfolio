import React from 'react';
import Icon from "./Icon";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Link from "./Link"
import SocialLinks from "./SocialLinks";

const StyledGreet = styled.span`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
`

const StyledHeroHeading = styled.h1`
  margin-bottom: 22px;
`

const HeroText = () => {
    return (
        <FlexContainer direction={"column"} align={"flex-start"} gap={32}>
            <div>
                <StyledGreet>Hi, I’m Alex <span>👋</span></StyledGreet>
                <StyledHeroHeading>Front-end developer</StyledHeroHeading>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor neque porttitor lorem auctor
                    vulputate. Suspendisse mollis elit tellus, a malesuada dui convallis et. Praesent lobortis ultrices
                    orci. Nunc non lacus in justo mollis convallis at sit amet enim. Quisque sit amet tristique velit.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quis magna ut lacus mattis
                    efficitur.
                </p>
            </div>
            <FlexContainer gap={10}> <Icon iconId={"location"}/> <span>Belarus, Homel</span></FlexContainer>
            <SocialLinks/>
        </FlexContainer>

    );
};

export default HeroText;