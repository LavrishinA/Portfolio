import styled from "styled-components";
import theme from "../Theme";

 const Container = styled.div`
   max-width: 1170px;
   width: 100%;
   margin: 0 auto;

  @media ${theme.media.mobile} {
    padding: 16px;
  }
 `
export default Container;