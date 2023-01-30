import styled from "styled-components"
import { device } from "../assets/device"

const BannerAbout = styled.img `
  width : var(--base-component-width);
  border-radius: 25px;
  display : flex;
  margin : auto;
@media screen and (${device.prehistoricPhone}){
  height : 7rem;
}
@media screen and (${device.mobileS}){
 height : 7.5rem;
}
@media screen and (${device.mobileM}){
  height : 8rem;
}
@media screen and (${device.mobileL}){
  height : 9.5rem;
}
@media screen and (${device.tablet}){
  height : 10rem; 
}
@media screen and (${device.laptop}){
  
  height : 12rem; 
}
@media screen and (${device.laptopL}){
  
  height : 21rem; 
}
@media screen and (${device.desktop}){
  
  height : 23rem; 
}
@media screen and (${device.desktopL}){
  
  height : 25rem; 
}
`

export { BannerAbout }
