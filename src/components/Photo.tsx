import styled from "styled-components";
import theme from "./Theme";

type PhotoProps = {
    width?: number
    height?: number
    shadowLeft?: boolean

}

const StyledPhoto = styled.img<PhotoProps>`
  margin: 0 30px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover;
  padding: 8px;
  box-shadow: ${props => props.shadowLeft ? "-30px 30px 0 0 rgba(229, 231, 235, 1)" : "30px 30px 0 0 rgba(229, 231, 235, 1)"};
  transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.5);
    cursor: zoom-in;
  }

  @media ${theme.media.mobile} {
    width: 360px;
    height: auto;

    box-shadow: 0 15px 0 15px rgba(229, 231, 235, 1);
    }
`

export default StyledPhoto