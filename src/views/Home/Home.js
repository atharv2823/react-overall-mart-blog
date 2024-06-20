import "./Home.css"
import cardsdata from "./../../data"
import martcards from "../../components/martcards/martcards"


export default function Home() {
  return (<>
    <h1 className="Heading">OverAll-Mart</h1>

    <div className="cards-container">
   {
    cardsdata.map((cardObject , i) => {
      
      const { 
         id,
         title,
         description,
         image,
         price,
         specification,
      } = cardObject

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
