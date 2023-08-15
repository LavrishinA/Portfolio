import styled from "styled-components";

type StyledLogoProps = {
    children: string
}

const StyledLogo = styled.p`
  font-family: sans-serif;
  color: #111827;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px; 
  
`

const Logo = ({children}: StyledLogoProps) => {
    return <StyledLogo>{children}</StyledLogo>
}

export default Logo