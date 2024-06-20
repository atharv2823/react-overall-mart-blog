import "./Home.css"
import martcards from "../../components/martcards/martcards";
import cardsdata from "./../../data"


export default function Home() {
  return (<>
    <h1 className="Heading">OverAll-Mart</h1>

    <div className="cards-container">
   {
    cardsdata.map((cardsObject , i) => {
      
      const { 
         id,
         title,
         description,
         image,
         price,
         specification,
      } = cardsObject

      return (
       <martcards
       key={i}
       id={id}
       title={title}
       description={description}
       image={image}
       price={price}
       specification={specification}

       />)
    })
   }
   </div>
  
  
    </>
  )
}
