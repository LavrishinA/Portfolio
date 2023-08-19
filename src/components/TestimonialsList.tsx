import React from 'react';
import FlexContainer from "./FlexContainer";
import TestimonialItem from "./TestimonialItem";

const testimonialsData = [
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
    },
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
    },
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
    },
    {
        name: "John Doe",
        post: "www.xxx.com",
        text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
    },

]

const TestimonialsList = () => {
    return (
        <FlexContainer justify={"flex-start"} align={"stretch"} gap={48}>
            {testimonialsData.map(props => <TestimonialItem {...props}/>)}
        </FlexContainer>
    );
};

export default TestimonialsList;