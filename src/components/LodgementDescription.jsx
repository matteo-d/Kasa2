import { useParams } from "react-router-dom"
import { MainContainer, ContainerLodgementInfos, ContainerLandlord,SubContainerInfos, ContainerCollapse, ContainerStars, Title, Location, ListTags, TagElement,  Stars,  LandlordName, LandlordPicture } from "../styles/LodgementDescription"
import { SingleCollapseText, SingleCollapseList } from "./SingleCollapse"
import FilledStar from "../assets/FilledStar.svg"
import EmptyStar from "../assets/EmptyStar.svg"
import JsonData from "../data.json"

function displayStars (numberOfStars){
  let Array = []
  let i = 0
  let maxStars = 5;
  while (i < numberOfStars){
    Array.push(FilledStar)
    i++
  }
  while (i < maxStars){
    Array.push(EmptyStar)
    i++
  }
  return Array
}

function BuggyJSONToArray(equipments) {
  let array = []
  for ( let x of equipments) {
    array.push(x)
    }
  return array
  }

export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)
  const stars = displayStars(Data[0].rating)
    return(
    <MainContainer>
      <ContainerLodgementInfos>
        <Title> {Data[0].title} </Title>
        <Location> {Data[0].location}</Location>
        <ListTags>
          {Data[0].tags.map((tag, index) => (
            <TagElement key={index}>{tag}</TagElement>
          ))}
        </ListTags>
      </ContainerLodgementInfos>
      <ContainerLandlord>
          <SubContainerInfos>
            <LandlordName>{Data[0].host.name}</LandlordName>
            <LandlordPicture src={Data[0].host.picture}/>
          </SubContainerInfos>
          <ContainerStars>
            {stars.map((star, index) =>(
            <Stars key={index} src={star} Stars/>
            ))}
          </ContainerStars>
      </ContainerLandlord>
      <ContainerCollapse>
        <SingleCollapseText article={Data[0]} />
        <SingleCollapseList list={BuggyJSONToArray(Data[0].equipments)} />
      </ContainerCollapse>
    </MainContainer>
  )
}
