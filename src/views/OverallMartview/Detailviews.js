import "./Detailviews.css"
import { useParams } from "react-router-dom"
import cardsdata from "../../data"

export default function Detailviews() {

  const { id } = useParams()

  const selectedmartcards = cardsdata.find((cardObject) =>  cardObject.id === id )

  return (<>
  <h1 className="Heading">OverAll-Mart</h1>
    <div>
      <p>
        <img src={selectedmartcards.image} alt="product" className="ovrall-img" />
      </p>
      <h1 className="Brand-heading">{selectedmartcards.title}</h1>
      <hr></hr>
      <p className="Model-name"> Model :- {selectedmartcards.description}</p>
      <p className="Price"><span className="span">Price :-</span> ₹{selectedmartcards.price}</p>

      <p>
      <span className="span1">specification :-</span>{selectedmartcards.specification}
      </p>

      <p>
        <button className="Add-to-cart">Add to Cart</button>
        <button className="Buy">Buy</button>
      </p>

    </div>

    </>
  )

}
