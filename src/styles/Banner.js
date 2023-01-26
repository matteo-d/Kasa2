import styled from "styled-components"
import Img from "../assets/IMG.png"

const Section = styled.section`
background-image: url(${Img});
background-position : center;
background-repeat : no-repeat;
background-size : cover;
display : flex;
height : 9.2rem;
padding : 1.8rem 0 1.8rem 0;
border-radius : 25px;
`
const Title = styled.h1`
margin : auto;
font-weight: 500;
font-size: 2.8rem;
color: var(--secondary-color);
`
export { Section, Title }
