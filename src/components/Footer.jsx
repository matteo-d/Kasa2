import { Logo, Legal, Foo } from "../styles/Footer"
import Svg from "../assets/LogoWhite.svg"

export default function Footer (){
  return(
    <Foo>
      <Logo src={Svg}></Logo>
      <Legal>© 2020 Kasa All rights reserved</Legal>
    </Foo>
  )
}
