import FlexContainer from "./FlexContainer";
import Link from "./Link";
import Icon from "./Icon";
import React from "react";
import {CommonProps} from "./CommonProps";
import theme from "./Theme";


const SocialLinks = (props: CommonProps) => {
    return (
        <FlexContainer justify={"flex-start"} gap={10} as={"ul"}>
            <li><Link  href={'https://github.com/LavrishinA'}><Icon color={theme[props.currentTheme].svgStroke} iconId={"github"}/></Link></li>
            <li><Link href={"https://linkedin.com/in/alexey-lavrishin"}><Icon color={theme[props.currentTheme].svgStroke} iconId={"linkedin"}/></Link></li>
        </FlexContainer>
    );
};

export default SocialLinks;