import styled, {keyframes} from "styled-components";

type LogoProps = {
    children: string
}

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`


const StyledLogo = styled.p`
  color: #111827;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;

  background: linear-gradient(to right, #959595 20%, #10B981 40%, #959595 60%, #10B981 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${shine} 2s linear infinite;
`

const Logo = ({children}: LogoProps) => {
    return <StyledLogo>{children}</StyledLogo>
}

export default Logo