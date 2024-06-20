import "./martcards.css"
import { Link } from "react-router-dom"

export default function martcards( {id,title,specification,description,image}) {
    return (
        <Link className="mart-card" to={`/martcards/${id}`}>
            <h2 className="mart-title">{title}</h2>
            <p className="mart-content">
              {specification.substring(0,50)}...
              </p>
           <p className="mart-content">{specification}</p>
            
            <p>
                <img src={image} alt={title} className="mart-image"/>
            </p>
            <p>
                {description.substring(0,50)}...
            </p>
           
            
        </Link>
      )
  
}
 