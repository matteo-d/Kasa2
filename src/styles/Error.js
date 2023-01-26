import styled from "styled-components"
import { Link } from "react-router-dom"
const Section = styled.section`
  display : flex;
  flex-direction : column;
  width : 86%;
  min-height : 100vh;
  justify-content : center;
  margin : 0 7% 0 7%;
`
const ErrorTitle = styled.h4`
margin : auto;
font-style: normal;
font-weight: var(--weight-big);
font-size: 288px;
color: #FF6060;
`
const Text = styled.p`
font-style: normal;
font-weight: var(--weight-medium);
font-size: 36px;
color: var(--primary-color);
margin : auto;
`
const LinkTo = styled(Link)`
font-style: normal;
font-weight: var(--weight-medium);
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;
text-decoration-line: underline;

color: var(--primary-color); 
margin : auto;
`
export { Section, ErrorTitle, Text, LinkTo }
