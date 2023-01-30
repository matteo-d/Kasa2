import jsonData from "../assets/about_text_data.json"
import { useState } from "react"
import { Section, Article, HeaderArticle, Arrow, TitleArticle, Text } from "../styles/CollapseLodgement"

import ArrowDown from "../assets/arrowDown.svg"
import ArrowUp from "../assets/arrowUp.svg"

export default function MultiCollapse() {
  const [expanded, setExpanded] = useState({});

  function toggleArrow(id) {
    setExpanded({...expanded, [id]: !expanded[id]});
  }

  return(
    <Section>
      {jsonData.map(article => {
        const isExpanded = expanded[article.id];
        return (
          <Article key={article.id}>
            <HeaderArticle>
              <TitleArticle>{article.title}</TitleArticle>
              <Arrow bgImage={isExpanded ? ArrowUp : ArrowDown} onClick={() => toggleArrow(article.id)}> </Arrow>
            </HeaderArticle>
            <Text display={isExpanded ? "block" : "none"}>{article.text}</Text>
          </Article>
        );
      })}
    </Section>
  )
}
