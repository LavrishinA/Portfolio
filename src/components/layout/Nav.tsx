import FlexContainer from "../FlexContainer";
import Icon from "../Icon";


const Nav = () => {

    return (
        <FlexContainer as="nav" gap={48}>
            <FlexContainer as="ul" gap={24}>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contacts</a></li>
            </FlexContainer>
            <FlexContainer as="div" gap={22}>
                <Icon iconId={"light-mode"}/>
                <button>Download CV</button>
            </FlexContainer>
        </FlexContainer>
    )
}



export default Nav