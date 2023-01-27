import styled from "styled-components"
import { device } from "../assets/device"

const Footer = styled.footer`
@media screen and (${device.prehistoricPhone}){
height : 10rem;
}
@media screen and (${device.mobileS}){
 
height : 10rem;
}
@media screen and (${device.mobileM}){
  
height : 11rem;
}
@media screen and (${device.mobileL}){
  
height : 12rem;
}
@media screen and (${device.tablet}){
  
height : 13rem;
}
@media screen and (${device.laptop}){
  
height : 14rem;
}
@media screen and (${device.laptopL}){
  
height : 15rem;
}
@media screen and (${device.desktop}){
  
height : 16rem;
}
@media screen and (${device.desktopL}){
  
height : 17rem;
}
  background-color : black;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  margin-top : 2.5rem;
  width : 100%
`
const Logo = styled.img `
`
const Legal = styled.p `  
color : white;
`
export { Logo, Legal, Footer }
