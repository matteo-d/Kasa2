import { createGlobalStyle, css } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  :root {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    height : 100vh;
    width : 86% ;
    margin : auto;
    font-family: 'Montserrat', sans-serif; 
    --primary-color : #FF6060;
    --secondary-color : #FFFFFF;
    --tertiary-color : #F7F7F7
    }
    body {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
  `

export default GlobalStyle
