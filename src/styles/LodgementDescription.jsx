import styled from "styled-components"

const LodgementInfos = styled.section`
	display : flex;
	justify-content : space-between;
	padding : 0 3% 0 7%;
	flex-wrap : wrap;
`
const Div = styled.div`
	width : 50%
`
const DivDos = styled.div`	
	width : 50%
`
const DivTres = styled.div`
	display : flex;		
	width : 100%
`
const Title = styled.h4`
	font-style: normal;
	font-weight: 500;
	font-size: 1.5rem;
	color: var(--primary-color);	
`
const Location = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 0.75rem;
	color: var(--primary-color);	
`
const ListTags = styled.ul`
	display : flex;
	list-style : none;
	padding : 0 ;
	height : 1rem
`
const TagElement  = styled.li`
	padding : 0.5rem 0.75rem 0.5rem 0.75rem;
	font-style: normal;
	font-weight: 500;
	font-size: 0.6rem
	background-color: var(--primary-color);
	border-radius: 10px;
	margin : 0 1rem 0 0;
`
const Infos = styled.div`
	display : flex;
	justify-content : flex-end;
`
const LandlordName = styled.p`
	font-size: 0.75rem	
`
const LandlordPicture = styled.img`
	border-radius : 50%;
	width : 2.65rem;
	height : 2.65rem;
	margin : 1rem 1rem 0 0;
`
const WrapperStars = styled.div`

`
const Stars = styled.img`
	height : 1.rem;
`
export { Div, DivDos, DivTres, LodgementInfos, Title, Location, ListTags, TagElement, Infos, WrapperStars, Stars, LandlordName, LandlordPicture }
