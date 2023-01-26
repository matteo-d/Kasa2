import styled from "styled-components"
import { Link } from "react-router-dom"

const Section = styled.section `
  margin : auto;
  border-radius: 25px;
width : var(--base-component-width);
`
const Ul = styled.ul `
  display : flex;
  flex-wrap: wrap;
  justify-content : space-evenly;
  padding : 0;
  list-style-type : none;
  background: var(--tertiary-color);
  border-radius: 25px;
`
const Lodgement = styled(Link) `
  display : flex;
  align-items : flex-end;
  background-image : url(${props => props.cover});
  filter: grayscale(55%);
  border-radius: 10px;
  width : 25%;
  height : 14.1rem;
  padding : 0 1.5rem 0 1.5rem;
  margin-top : 1rem;
  text-decoration: none; 
`
const Title = styled.h3 `
font-style: normal;
font-weight: var(--weight-medium);
font-size: 0.9rem;
color: var(--secondary-color);
`
export { Section, Ul, Lodgement, Title }
