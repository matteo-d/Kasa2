import jsonData from "../assets/data.json"
import { Section, Ul, Lodgement, Title} from "../styles/CardHome"
export default function Card(){ 
  return(
    <Section>
      <Ul>
        {jsonData.map(lodgement => (
          <Lodgement  key={ lodgement.id } to={`/lodgement/${lodgement.id}`} cover={lodgement.cover}>
            <Title>{ lodgement.title } </Title>
          </Lodgement>
        ))}
      </Ul>
    </Section>
  )
}
