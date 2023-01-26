import styled from "styled-components"

const Section = styled.section `
  background-image : url(${props => props.bgImage});
  display : flex;
  height : 17.3rem;
  justify-content : space-between;
  margin : auto;
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

