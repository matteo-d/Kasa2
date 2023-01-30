import styled from "styled-components"
import Img from "../assets/IMG.png"
import { device } from "../assets/device"

const Section = styled.section`
@media screen and (${device.prehistoricPhone}){
height : 3rem;
}@media screen and (${device.mobileS}){
 height : 4rem;
}@media screen and (${device.mobileM}){
 height : 5rem;
}@media screen and (${device.mobileL}){
  height : 7rem;
}@media screen and (${device.tablet}){
  height : 8rem;
}@media screen and (${device.laptop}){
  height : 9.5rem;
}@media screen and (${device.laptopL}){
  height : 11rem;
}@media screen and (${device.desktop}){
  height : 12.5rem;
}@media screen and (${device.desktopL}){
  height : 16rem;
}
background-image: url(${Img});
background-position : center;
background-repeat : no-repeat;
background-size : cover;
display : flex;

margin : auto;
padding : 1.8rem 0 1.8rem 0;
border-radius : 25px;
filter: grayscale(5%) brightness(70%) contrast(2);
width : var(--base-component-width);
`
const Title = styled.h1
`@media screen and (${device.prehistoricPhone}){
  font-size : 0.9rem;
}@media screen and (${device.mobileS}){
  font-size : 1.1rem;
}@media screen and (${device.mobileM}){
  font-size : 1.4rem;
}@media screen and (${device.mobileL}){
  font-size : 1.6rem;
}@media screen and (${device.tablet}){
  font-size : 2rem;
}@media screen and (${device.laptop}){ 
  font-size : 2.2rem;
}@media screen and (${device.laptopL}){
  font-size : 2.6rem;
}@media screen and (${device.desktop}){
  font-size : 3rem;
}@media screen and (${device.desktopL}){ 
  font-size : 4rem;
}
margin : auto;
font-weight: var(--weight-medium);
color: var(--secondary-color);
`
export { Section, Title }
