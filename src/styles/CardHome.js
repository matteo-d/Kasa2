import styled from "styled-components"
import { Link } from "react-router-dom"
import { device } from "../assets/device"

const Section = styled.section `
  padding-top : 1.5rem;
  margin : auto;
  border-radius: 25px;
width : var(--base-component-width);
`
const Ul = styled.section `
@media screen and (${device.tablet}){
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
}
  justify-content : space-evenly;
  padding : 0;
  list-style-type : none;
  background-color: var(--tertiary-color);
  border-radius: 25px;
`
const Lodgement = styled(Link) `
@media screen and (${device.prehistoricPhone}){
width : 100%;
height : 12rem:
}
@media screen and (${device.mobileS}){
height : 14rem;
}
@media screen and (${device.mobileM}){
height : 17rem;
}
@media screen and (${device.mobileL}){
height : 19rem;
}
@media screen and (${device.tablet}){
flex-basis: 27%;
padding : 0.5rem;
height : 15rem
}
@media screen and (${device.laptop}){
padding : 0.5rem;
height : 18rem
}
@media screen and (${device.laptopL}){
padding : 0.5rem;
height : 24rem
}
@media screen and (${device.desktop}){
padding : 0.5rem;
height : 29rem
}
@media screen and (${device.desktopL}){
padding : 0.5rem;
height : 34rem
}
  
  display : flex;
  align-items : flex-end;
  background-image : url(${props => props.cover});
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  filter: grayscale(70%);
  border-radius: 10px;
    height : 14.1rem;
  font-weight : var(--weight-medium);
  margin-top : 2rem;
  margin-bottom : 1rem;
  text-decoration: none; 
`
const Title = styled.h3 `
font-style: normal;
font-weight: var(--weight-medium);
font-size: 1.1rem;
width : 50%;
color: var(--secondary-color);
`
export { Section, Ul, Lodgement, Title }
