import { Logo, Legal, Footer } from "../styles/Footer"
import Svg from "../assets/LogoWhite.svg"

export default function Foo (){
  return(
    <Footer>
      <Logo src={Svg}></Logo>
      <Legal>© 2020 Kasa All rights reserved</Legal>
    </Footer>
  )
}
