import styled from "styled-components"
import { Link } from "react-router-dom"
import { device } from "../assets/device"

const Section = styled.section `
  margin : auto;
  border-radius: 25px;
width : var(--base-component-width);
`
const Ul = styled.section `
@media screen and (${device.tablet}){
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
}@media screen and (${device.laptop}){
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
}@media screen and (${device.laptopL}){
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
}@media screen and (${device.desktop}){
 display : flex; 
  flex-direction : row;
  flex-wrap : wrap;
}@media screen and (${device.desktopL}){
display : flex;
  flex-direction : row;
  flex-wrap : wrap;
}
  margin-top : 2.4rem; 
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
 width : 100%;
height : 14rem;
}
@media screen and (${device.mobileM}){
  width : 100%;
height : 17rem;
}
@media screen and (${device.mobileL}){
  width : 100%;
height : 19rem;
}
@media screen and (${device.tablet}){
height : 12rem;
flex-basis: 28%;
padding : 0.5rem;
height : 16rem
}
@media screen and (${device.laptop}){
height : 12rem;
flex-basis: 30%;
padding : 0.5rem;
height : 23rem
}
@media screen and (${device.laptopL}){
height : 12rem;
flex-basis: 30%;
padding : 0.5rem;
height : 26rem
}
@media screen and (${device.desktop}){
height : 12rem;
flex-basis: 30%;
padding : 0.5rem;
height : 29rem
}
@media screen and (${device.desktopL}){
height : 12rem;
flex-basis: 30%;
padding : 0.5rem;
height : 34rem
}
  
  display : flex;
  align-items : flex-end;
  background-image : url(${props => props.cover});
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  filter: grayscale(55%);
  border-radius: 10px;
    height : 14.1rem;
  font-weight : var(--weight-medium);
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
