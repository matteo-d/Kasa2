import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
  body{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Montserrat', sans-serif; 
    min-height : 100vh;
    margin : auto;
    --primary-color : #FF6060;
    --secondary-color : #FFFFFF;
    --tertiary-color : #F7F7F7;
    --weight-little : 400;
    --weight-medium : 500;
    --weight-big : 700;
    --base-component-width : 86%; 
    }
  `

export default GlobalStyle
