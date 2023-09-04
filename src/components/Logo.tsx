import styled from "styled-components";

type LogoProps =  {
    children: string
}

const StyledLogo = styled.p`
  color: #111827;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
 
  background: linear-gradient(to right, #959595 0%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Logo = ({children}: LogoProps) => {
    return <StyledLogo>{children}</StyledLogo>
}

export default Logo