import styled from "styled-components";

type PhotoProps = {
    width?: number
    height?: number
    shadowLeft?: boolean

}

const Photo = styled.img<PhotoProps>`
  margin: 0 30px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover;
  padding: 8px;
  box-shadow: ${props => props.shadowLeft ? "-30px 30px 0 0 rgba(229, 231, 235, 1)" : "30px 30px 0 0 rgba(229, 231, 235, 1)"};
`

export default Photo