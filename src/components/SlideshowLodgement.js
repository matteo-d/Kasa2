import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import jsonData from "../assets/data.json"
import { Section, ArrowLeft, ArrowRight } from "../styles/SlideshowLodgement"
import Arrow1 from "../assets/arrowLeft.svg"
import Arrow2 from "../assets/arrowRight.svg"

function getLodgementImages(data) {
  let Images = []
  for (let image of data[0].pictures){
    Images.push(image)
  }
  return Images
}

function Previous(img, idx, setIdx) {
  let len = img.length
  if (idx === 0) {
      setIdx( idx = len - 1)
      return
  }
  setIdx(idx - 1)
}

function Next(img, idx, setIdx) {
  let len = img.length
  if (idx === len - 1) {
      setIdx( idx = 0)
      return
  }
  setIdx(idx + 1)
}

export default function SlideshowLodgement() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id)
  const Images = getLodgementImages(Data)
  const [index, setIndex] = useState(0)
  const [bgImage, setBgImage] = useState(Images[0])

  useEffect(() => {
    setBgImage(Images[index])
  }, [index, Images])

  return (
    <Section bgImage={bgImage}>
      <ArrowLeft onClick={() => Previous(Images,index,setIndex)} src={Arrow1} />
      <ArrowRight onClick={() => Next(Images,index,setIndex)} src={Arrow2} />
    </Section>
  )
}
