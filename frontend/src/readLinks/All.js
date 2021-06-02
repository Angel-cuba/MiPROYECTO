import { useEffect, useState } from "react"
import MyLinks from './MyLinks'




const All = () => {
   const [ dataCards, setdataCards ] = useState([])


  useEffect( () => Links(setdataCards),[])

  let cards 
  if (dataCards.length) {
       cards = dataCards.map(card => (
            <MyLinks
            key={card.id}
             id = {card.id}
             title={card.title}
             url={card.url}
             description = {card.description}

            />
                         

       ))
  }

return (
     <>
     <div className="all">
           {cards ? cards : <span>No hay cards..............</span>}   
     </div>
 

     </>
)


}
const Links = async(setdataCards) => {
     const response = await fetch("http://localhost:4000/comments/read")
     const data = await response.json()
     setdataCards(data)
}


export default All