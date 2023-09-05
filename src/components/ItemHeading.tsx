import styled from "styled-components";

 const StyledItemHeading = styled.h4`
  font-size: calc((100vw - 375px) / (1440 - 375) * (20 - 18) + 18px);
  font-weight: 600;
  line-height: 28px;
  color: ${props => props.color};
  margin-bottom: 16px;


`
export default StyledItemHeading