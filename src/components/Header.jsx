import { ContainerHeader, LogoKasa, ContainerNav, LinkHome, LinkAbout } from "../styles/Header"
import Svg from "../assets/logo.svg"

export default function Header(){
  return(
    <ContainerHeader>
      <LogoKasa  src={ Svg } alt="Logo de Kasa"/>
      <ContainerNav>
        <LinkHome to="/"> Acceuil </LinkHome>
      <LinkAbout to="/about"> A Propos </LinkAbout>
      </ContainerNav>
    </ContainerHeader>
  )
}   
