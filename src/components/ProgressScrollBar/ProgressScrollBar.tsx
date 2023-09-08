import styled from "styled-components";
import {useEffect, useState} from "react";

type  StyledProgressScrollBarType = {
    width?: number | null
    height?: number
    duration?: number
    color?: string
}

const StyledProgressScrollBar = styled.div<StyledProgressScrollBarType>`
 margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: ${props => props.color ||"#10B981"};
  height: ${props => props.height || 3}px;
  width: ${props => `${props.width}%`};
  transition: width ${props => props.duration || 1} ease-out;

`
const ProgressScrollBar = (props: StyledProgressScrollBarType) => {
    const [width, setWidth] = useState<number | null>(null);


    function handleScrolling() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (height > 0) {
            setWidth(scrolled);
        } else {
            setWidth(null);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling)

        return () => {
            window.removeEventListener('scroll', handleScrolling);
        };
    }, []);

    return (
        <StyledProgressScrollBar {...props} width={width} />
    );
};

export default ProgressScrollBar;