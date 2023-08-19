import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import ItemHeading from "./ItemHeading";
import usericon from "../assets/images/usericon.png"

type TestimonailItemProps =  {
    name: string
    post: string
    text: string
}

const StyledTestimonialCard = styled(FlexContainer)`
  max-width: 374px;
  padding: 48px;
  text-align: justify;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 4px 3px 0 rgba(0, 0, 0, 0.07);
`

const StyledUserICon = styled.img`

  padding: 5px;
  border-radius: 50%;
  background-color: #9CA3AF;
`

const StyledFigure = styled.figure`
  text-align: center;

  & figcaption {
    font-size: 14px;
    line-height: 20px;
  }
`

const TestimonialItem = (props: TestimonailItemProps) => {
    return (
        <StyledTestimonialCard direction={"column"} justify={"space-between"} gap={24}>
            <StyledUserICon src={usericon}/>
            <p>
                {props.text}
            </p>
            <StyledFigure>
                <ItemHeading>{props.name}</ItemHeading>
                <figcaption>{props.post}</figcaption>
            </StyledFigure>
        </StyledTestimonialCard>
    );
};

export default TestimonialItem;