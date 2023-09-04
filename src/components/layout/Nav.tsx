import FlexContainer from "../FlexContainer";
import Icon from "../Icon";
import {CommonProps} from "../CommonProps";
import theme from "../Theme";


const Nav = (props: CommonProps) => {

    return (
        <FlexContainer gap={48}>
            <FlexContainer as="ul" gap={24}>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contacts</a></li>
            </FlexContainer>
            <FlexContainer as="div" gap={22}>
                <button onClick={props.onSwitchTheme}>
                    <Icon color={theme[props.currentTheme].svgStroke} iconId={"light-mode"}/>
                </button>
                <button>Download CV</button>
            </FlexContainer>
        </FlexContainer>
    )
}


export default Nav;