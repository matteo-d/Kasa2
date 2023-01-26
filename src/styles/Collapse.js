import styled from "styled-components"

const Section = styled.section `background-color : lightblue;
display : flex;
justify-content : space-between;
`
const Article = styled.article `
display : flex;
flex-direction : column;
margin-top : 2rem;

`
const HeaderArticle = styled.div `
display : flex;
flex-direction : row;
justify-content : space-between;
height : 3rem;
background-color : #FF6060;
border-radius: 5px;
padding : 0 0rem 0 0.9rem;
`
const TitleArticle = styled.h3 `
font-style: normal;
font-weight: bold;
font-size: 24px;
color : #FFFFFF;
 align-self : center;
`
const Arrow = styled.span `
 background-image : url(${props => props.bgImage});
 background-repeat : no-repeat;
 align-self : center;
 height : 1.8rem;
 width : 1.8rem;
 padding-right : 1.2rem
`
const Text = styled.p `
background: #F7F7F7;
border-radius: 5px;
padding : 1rem 1.8rem 1rem 0.8rem;
font-style: normal;
font-weight: 500;
font-size: 24px;
color : #FF6060;
display : ${props => props.display};
`
const List = styled.li `
background: #F7F7F7;
border-radius: 5px;
padding : 1rem 1.8rem 1rem 0.8rem;
font-style: normal;
font-weight: 500;
font-size: 24px;
color : #FF6060;
display : ${props => props.display};
`
export { Section, Article, HeaderArticle, TitleArticle, Arrow, Text, List }
