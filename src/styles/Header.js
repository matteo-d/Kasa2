import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`  
  display : flex;
  justify-content : space-between;
  margin : auto;
  padding : 2rem 0 3rem 0;
  width : var(--base-component-width);
`
const Img = styled.img`
height : 2.8rem;
`
const Nav = styled.nav`
  align-self : center;
`
const Home = styled(Link)`
  font-style: normal;
  font-weight: var(--weight-medium);
  font-size: 1.65rem;
  text-decoration-line: none;
  color: var(--primary-color);
  &:active, &:hover {
    text-decoration-line : underline;
  }
`
const About = styled(Link)`
  padding : 0rem 2rem 0rem 4rem;
  font-style: normal;
  font-weight: var(--weight-medium);
  font-size: 1.65rem;
  text-decoration-line: none;
  color: var(--primary-color); 
  &:active, &:hover {
    text-decoration-line : underline;
  } `

export { StyledHeader, Img, Nav, Home, About }
