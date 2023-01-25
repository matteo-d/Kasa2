import { useParams } from "react-router-dom"
import { Div, DivDos, DivTres, LodgementInfos , Title, Location, ListTags, TagElement, Infos, Stars, WrapperStars, LandlordName, LandlordPicture } from "../styles/LodgementDescription"
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
export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)
  console.log(typeof([0].equipments))
  const stars = displayStars(Data[0].rating)
  return(
    <LodgementInfos>
      <Div>
        <Title> {Data[0].title} </Title>
        <Location> {Data[0].location}</Location>
        <ListTags>
          {Data[0].tags.map((tag, index) => (
            <TagElement key={index}>{tag}</TagElement>
          ))}
        </ListTags>
      </Div>
      <DivDos>
          <Infos>
            <LandlordName>{Data[0].host.name}</LandlordName>
            <LandlordPicture src={Data[0].host.picture}/>
          </Infos>
          <WrapperStars>
            {stars.map((star, index) =>(
            <Stars key={index} src={star} Stars/>
            ))}
          </WrapperStars>
      </DivDos>
      <DivTres>
        <SingleCollapseText article={Data[0]} />
        <SingleCollapseList article={Data[0].equipments} />
      </DivTres>
    </LodgementInfos>
  )
}
