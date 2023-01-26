import styled from "styled-components"

const LodgementInfos = styled.section`
	display : flex;
	justify-content : space-between;
	flex-wrap : wrap;
	margin-top : 2rem;
	height : 38vh;
`
const Div = styled.div`
	width : 50%
`
const DivDos = styled.div`	
	width : 50%
`
const DivTres = styled.div`
	display : flex;		
	width : 100%;
	justify-content : space-between;
`
const Title = styled.h4`
	font-style: normal;
	font-weight: 500;
	font-size: 1.5rem;
	color: var(--primary-color);	
	margin : 0;
`
const Location = styled.p`
	margin : 0;
	font-style: normal;
	font-weight: 500;
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
	font-weight: 500;
	font-size: 0.6rem;
	border-radius: 10px;
	background-color : var(--primary-color);
	height : 0.9rem;
	margin-right : 0.75rem;
	padding : 0.33rem 0.75rem 0.33rem 0.75rem;
	color : var(--secondary-color)
`
const Infos = styled.div`
	display : flex;
	justify-content : flex-end;
`
const LandlordName = styled.p`
	width : min-content;
	font-size: 0.9rem;
	color : var(--primary-color);
	margin : 0 0.5rem 0 0;
	height : 50% ;
`
const LandlordPicture = styled.img`
	height : 50% ;	
	border-radius : 50%;
	width : 2.8rem;
	height : 2.8rem;
`
const WrapperStars = styled.div`
height : 50% ;
display : flex;
align-items : flex-end;
justify-content : flex-end;
`
const Stars = styled.img`
	height : 1rem;
`
export { Div, DivDos, DivTres, LodgementInfos, Title, Location, ListTags, TagElement, Infos, WrapperStars, Stars, LandlordName, LandlordPicture }
