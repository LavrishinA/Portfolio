import SocialLinks from "./SocialLinks";
import FlexContainer from "./FlexContainer";
import styled from "styled-components";
import Icon from "./Icon";
import flexContainer from "./FlexContainer";

const StyledContactLink = styled(flexContainer)`
  color: #111827;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.72px;
`

const StyledStatus = styled.p`
  display: list-item;
  list-style: disc;
  ::marker {
  color: #10B981
}
`

const Contacts = () => {
    return (
        <FlexContainer direction={"column"} gap={48}>

            <FlexContainer direction={"column"} gap={10}>
                <StyledStatus>Available for offer</StyledStatus>
                <StyledContactLink gap={10} as={"a"} href="mailto: alexeylavrishin@gmail.com" >
                    <Icon width={"34"} height={"34"} iconId={"mail"}/>
                    <span>alexeylavrishin@gmail.com</span>
                </StyledContactLink>
                <StyledContactLink gap={10} as={"a"} href="telto: +375293385529" >
                    <Icon width={"34"} height={"34"} iconId={"tel"}/>
                    <span>+375293385529</span>
                </StyledContactLink>

            </FlexContainer>

            <FlexContainer direction={"column"} gap={10}>
                <p>You may also find me on these platforms!</p>
                <SocialLinks/>
            </FlexContainer>
        </FlexContainer>
    );
};

export default Contacts;