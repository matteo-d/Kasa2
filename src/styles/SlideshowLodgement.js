import styled from "styled-components"
import { device } from "../assets/device"

const Section = styled.section `
@media screen and (${device.prehistoricPhone}){
height : 12rem;
}
@media screen and (${device.mobileS}){
 height : 14rem;
}
@media screen and (${device.mobileM}){
  height : 16rem;
}
@media screen and (${device.mobileL}){
  height : 18rem;
}
@media screen and (${device.tablet}){
  height : 20rem;
}
@media screen and (${device.laptop}){
  height : 23rem;
}
@media screen and (${device.laptopL}){
  height : 36rem;
}
@media screen and (${device.desktop}){
  height : 44rem;
}
@media screen and (${device.desktopL}){
  height : 49rem;
}
  width : var(--base-component-width);
  background-image : url(${props => props.bgImage});
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  display : flex;
  
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

