import { useEffect, useState } from "react"
import MyLinks from './MyLinks'




export const All = () => {
   const [ dataCards, setdataCards ] = useState([])
       //testing timeago

  useEffect( () =>{
       Links(setdataCards)
       },[])

 
  let cards 
  if (dataCards.length) {
       cards = dataCards.map(card => (
            <MyLinks
            key={card.id}
             id = {card.id}
             title={card.title}
             url={card.url}
             description = {card.description}
          created_at={card.created_at}
            />
       ))
  }

     return (
          <>
               <div className="all">
                    {cards ? cards : <span>Sorry, there are sever problems..............</span>}   
               </div>
          </>
     )

}
const Links = async(setdataCards) => {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/read`)
     const data = await response.json()
     setdataCards(data)
}



