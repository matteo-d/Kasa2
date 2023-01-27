import styled from "styled-components"
import { Link } from "react-router-dom"
import { device } from "../assets/device"


const ContainerHeader = styled.header`  
  display : flex;
  justify-content : space-between;
  margin : auto;
  padding : 2rem 0 3rem 0;
  width : var(--base-component-width);
  
`
const LogoKasa = styled.img`
@media screen and (${device.prehistoricPhone}){
height : 1.9rem;
@media screen and (${device.mobileS}){
height : 1.9rem;
}
@media screen and (${device.mobileM}){
height : 2.5rem;
}
@media screen and (${device.mobileL}){
height : 3rem;
}
@media screen and (${device.tablet}){
height : 5rem;
}
@media screen and (${device.desktopL}){
height : 6rem;
}
`
const ContainerNav = styled.nav`
  align-self : center;
`
const LinkHome = styled(Link)`
@media screen and (${device.prehistoricPhone}){
font-size : 0.8rem;
}@media screen and (${device.mobileS}){
font-size : 1rem;
}@media screen and (${device.mobileL}){
font-size : 1.2rem;
}@media screen and (${device.tablet}){
font-size : 1.4rem;
}@media screen and (${device.laptop}){
font-size : 1.6rem;
}

  text-decoration-line: none;
  color: var(--primary-color);
  font-weight: var(--weight-medium);
  &:active, &:hover {
    text-decoration-line : underline;
  }
`
const LinkAbout = styled(Link)`
@media screen and (${device.prehistoricPhone}){
  font-size : 0.8rem;
  padding-left : 0.3rem;
}@media screen and (${device.mobileS}){
  padding-left : 0.6rem;
  font-size : 1rem;
}@media screen and (${device.mobileL}){
  padding-left : 0.8rem;
font-size : 1.2rem;
}@media screen and (${device.tablet}){
  padding-left : 1.5rem;
font-size : 1.4rem;
}@media screen and (${device.laptop}){
  padding-left : 2rem;
font-size : 1.6rem;
}
  font-weight: var(--weight-medium); 
  text-decoration-line: none;
  color: var(--primary-color); 
  &:active, &:hover {
    text-decoration-line : underline;
  } `

export { ContainerHeader, LogoKasa, ContainerNav, LinkHome, LinkAbout }
