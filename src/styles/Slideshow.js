import styled from "styled-components"

const Section = styled.section `

width : var(--base-component-width);
  background-image : url(${props => props.bgImage});
  background-position : center;
background-repeat : no-repeat;
background-size : cover;
  display : flex;
  height : 17.3rem;
  justify-content : space-between;
  margin : auto;
  border-radius : 25px;
`

const ArrowLeft = styled.img `
 height : 3.3rem; 
 padding-left : 2rem;
 align-self : center;
`

const ArrowRight = styled.img `
 height : 3.3rem; 
 padding-right : 2rem;
 align-self : center;
`
export { ArrowLeft, ArrowRight, Section }

