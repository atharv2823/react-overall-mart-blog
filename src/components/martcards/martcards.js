import "./MartCards.css"
import { Link } from "react-router-dom"

export default function MartCards( {id,title,image}) {
    return (
        <Link className="mart-card" to={`/martcards/${id}`}>
             <p>
                <img src={image} alt={title} className="mart-image"/>
            </p>
            <h2 className="mart-title">{title}</h2>
        
            
        </Link>
      )
  
}
 