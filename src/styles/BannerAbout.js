import styled from "styled-components"
import { device } from "../assets/device"

const BannerAbout = styled.img `
  width : var(--base-component-width);
  border-radius: 25px;
 
  place-content : center;
  display : flex;
  margin : auto;
  margin-bottom : 2rem;
  object-fit : fill;
  @media screen and (${device.prehistoricPhone}){
  height : 8rem;
}
@media screen and (${device.mobileS}){
 height : 9rem;
}
@media screen and (${device.mobileM}){
  height : 10rem;
}
@media screen and (${device.mobileL}){
  height : 11rem;
}
@media screen and (${device.tablet}){
  height : 13rem; 
}
@media screen and (${device.laptop}){
  
}
@media screen and (${device.laptopL}){
  
}
@media screen and (${device.desktop}){
  
}
@media screen and (${device.desktopL}){
  
}
`

export { BannerAbout }
