import "./Overallviews.css"
import { useParams } from "react-router-dom"
import martcards from "./../../data"

export default function Overallviews() {

  const { id } = useParams()

  const selectedmartcards = martcards.find((martcardsObject) =>  martcardsObject.id === id )

  return (
    <div>
      <h1>{selectedmartcards.title}</h1>

    </div>
  )

}
