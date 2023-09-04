import React from 'react';
import FlexContainer from "./FlexContainer";
import TestimonialItem from "./TestimonialItem";

const testimonialsData = [
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Alex and will rehire in the future for Frontend development."
    },
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Alex and will rehire in the future for Frontend development."
    },
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Alex and will rehire in the future for Frontend development."
    },
]


type ItemBgProps = {
    itemBg?: string
}


const TestimonialsList = ({itemBg}: ItemBgProps) => {
    return (
        <FlexContainer justify={"center"}  wrap={"wrap"} gap={24}>
            {testimonialsData.map((props, i) => <TestimonialItem {...props} background={itemBg}  key={i}/>)}
        </FlexContainer>
    );
};

export default TestimonialsList;