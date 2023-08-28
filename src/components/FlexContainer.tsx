import styled from "styled-components";


type FlexContainerProps = {
    direction?: string
    align?: string
    justify?: string
    gap?: number
    wrap?: string

}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({direction}) => direction || "row"};
  justify-content: ${({justify}) => justify || "center"};
  align-items: ${({align}) => align || "center"};
  gap: ${({gap}) => `${gap}px` || 0};
  flex-wrap: ${({wrap}) => wrap || "no-wrap"};
  
`
export default FlexContainer