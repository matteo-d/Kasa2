import styled from "styled-components"
import { device } from "../assets/device"
const WrapperLogo = styled.div`
  min-width : 100vw;
  min-height : 100vh;
  display : flex;
`
const Logo = styled.img`
@media screen and (${device.prehistoricPhone}){
height : 3rem;
}
@media screen and (${device.mobileM}){
height : 3rem;
}
@media screen and (${device.mobileL}){
height : 5rem;
}
@media screen and (${device.tablet}){
height : 7rem;
}
@media screen and (${device.laptop}){
height : 8rem;
}
@media screen and (${device.laptopL}){ 
height : 9rem;
}
@media screen and (${device.desktop}){
height : 10rem;
}
@media screen and (${device.desktopL}){  
height : 11rem;
}
margin : auto;
`
export { WrapperLogo, Logo }
