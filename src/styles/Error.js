import styled from "styled-components"
import { Link } from "react-router-dom"
import { device } from "../assets/device" 
const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  text-align : center;
  margin :auto;
  height : 80vh;
`
const ErrorTitle = styled.h4`
@media screen and (${device.prehistoricPhone}){
font-size : 5rem;
}
@media screen and (${device.mobileS}){
 
font-size : 7rem;
}
@media screen and (${device.mobileM}){
  
font-size : 10rem;
}
@media screen and (${device.mobileL}){
  
font-size : 14rem;
}
@media screen and (${device.tablet}){
  
font-size : 18rem;
}
@media screen and (${device.laptop}){
  
font-size : 23rem;
}
@media screen and (${device.laptopL}){
  
font-size : 29rem;
}
@media screen and (${device.desktopL}){
  
font-size : 40rem;
}
font-style: normal;
font-weight: var(--weight-big);
color: #FF6060;
margin-bottom : 0;
margin-top : 0;
`
const Text = styled.p
`@media screen and (${device.prehistoricPhone}){
 font-size : 1.1rem;
}
@media screen and (${device.mobileS}){
 
 font-size : 1.2rem;
}
@media screen and (${device.tablet}){
  
 font-size : 1.5rem;
}
@media screen and (${device.laptopL}){
  
 font-size : 1.9rem;
}
@media screen and (${device.desktopL}){
  
 font-size : 2.4rem;
}
font-style: normal;
font-weight: var(--weight-medium);
color: var(--primary-color);
`
const LinkTo = styled(Link)`
margin-top : 0;
font-weight: var(--weight-medium);
text-decoration-line: underline;
color: var(--primary-color); 
`
export { Section, ErrorTitle, Text, LinkTo }
