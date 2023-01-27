import styled from "styled-components"
import { device } from "../assets/device"

const MainContainer = styled.section`
@media screen and (${device.prehistoricPhone}){
flex-direction : column;
}
@media screen and (${device.mobileS}){
 
}

@media screen and (${device.mobileM}){
  
}

@media screen and (${device.mobileL}){
  
}

@media screen and (${device.tablet}){
  
flex-direction : row;
}

@media screen and (${device.laptop}){
  
}

@media screen and (${device.laptopL}){
  
}

@media screen and (${device.desktop}){
  
}

@media screen and (${device.desktopL}){
  
}
margin : auto;
width : var(--base-component-width);
display : flex;
justify-content : space-between;
flex-wrap : wrap;
margin-top : 2rem;
`
const ContainerLodgementInfos = styled.div`
@media screen and (${device.prehistoricPhone}){
width : 100%
}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
width : 50%  
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
const Title = styled.h4`
font-style: normal;
font-weight: var(--weight-medium);
font-size: 1.5rem;
color: var(--primary-color);	
margin : 0;
`
const Location = styled.p`
margin : 0;
font-style: normal;	
font-weight: var(--weight-medium);
font-size: 0.75rem;
color: var(--primary-color);	
`
const ListTags = styled.ul`
display : flex;
list-style : none;
padding : 0 ;
flex-wrap : no-wrap;
`

const TagElement  = styled.li`
font-style: normal;
font-weight:var(--weight-medium);
font-size: 0.6rem;	
border-radius: 10px;
background-color : var(--primary-color);
height : 0.9rem;
margin-right : 0.75rem;
padding : 0.33rem 0.75rem 0.33rem 0.75rem;
color : var(--secondary-color)
`


const ContainerLandlord = styled.div`	
@media screen and (${device.prehistoricPhone}){
width : 100%;
justify-content : space-between;
}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
width : 50%  
}
@media screen and (${device.laptop}){
  
}
@media screen and (${device.laptopL}){
  
}
@media screen and (${device.desktop}){
  
}
@media screen and (${device.desktopL}){
  
}
display : flex;
`
const SubContainerInfos = styled.div`
@media screen and (${device.prehistoricPhone}){
order : 2;
}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
  order : 1;
}
@media screen and (${device.laptop}){
  
}
@media screen and (${device.laptopL}){
  
}
@media screen and (${device.desktop}){
  
}
@media screen and (${device.desktopL}){
  
}
display : flex;
`
const LandlordName = styled.p`
text-align : center;
width : min-content;
font-weight : var(--weight-medium);
font-size: 0.9rem;
color : var(--primary-color);
margin : 0.5rem 0.5rem 0 0;
`
const LandlordPicture = styled.img`
border-radius : 50%;
width : 2.8rem;
`
const ContainerStars = styled.div`
@media screen and (${device.prehistoricPhone}){
order: 1;
}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
  order : 2;
}
@media screen and (${device.laptop}){
  
}
@media screen and (${device.laptopL}){
  
}
@media screen and (${device.desktop}){
  
}
@media screen and (${device.desktopL}){
  
}
display : flex;
`
const Stars = styled.img`
height : 1rem;
align-self : center;
`

const ContainerCollapse = styled.div`
@media screen and (${device.prehistoricPhone}){
flex-direction : column;
}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
  flex-direction : row;
  justify-content : space-between;
}
@media screen and (${device.laptop}){
}
@media screen and (${device.laptopL}){
}
@media screen and (${device.desktop}){
}
@media screen and (${device.desktopL}){
}
display : flex;		
width : 100%;
	
`

export { MainContainer, ContainerLodgementInfos, ContainerLandlord, SubContainerInfos,ContainerStars, ContainerCollapse , Title, Location, ListTags, TagElement, LandlordName, LandlordPicture, Stars }
