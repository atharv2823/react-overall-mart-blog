import "./Overallviews.css"
import { useParams } from "react-router-dom"
import cardsdata from "./../../data"

export default function Overallviews() {

  const { id } = useParams()

  const selectedmartcards = cardsdata.find((cardObject) =>  cardObject.id === id )

  return (
    <div>
      <h1>{selectedmartcards.title}</h1>

    </div>
  )

}
