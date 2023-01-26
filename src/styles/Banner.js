import styled from "styled-components"
import Img from "../assets/IMG.png"

const Section = styled.section`
background-image: url(${Img});
background-position : center;
background-repeat : no-repeat;
background-size : cover;
display : flex;
height : 8rem;
margin : auto;
padding : 1.8rem 0 1.8rem 0;
border-radius : 25px;
filter: grayscale(5%) brightness(70%) contrast(2);
width : var(--base-component-width);
`
const Title = styled.h1`
margin : auto;
font-weight: var(--weight-medium);
font-size: 3.25rem;
color: var(--secondary-color);
`
export { Section, Title }
