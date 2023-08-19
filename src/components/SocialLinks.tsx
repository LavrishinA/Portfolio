import FlexContainer from "./FlexContainer";
import Link from "./Link";
import Icon from "./Icon";
import React from "react";


const SocialLinks = () => {
    return (
        <FlexContainer justify={"flex-start"} gap={10} as={"ul"}>
            <li><Link href={'https://github.com/LavrishinA'}><Icon iconId={"github"}/></Link></li>
            <li><Link href={"https://linkedin.com/in/alexey-lavrishin"}><Icon iconId={"linkedin"}/></Link></li>
        </FlexContainer>
    );
};

export default SocialLinks;