import { useEffect, useState } from "react"
import MyLinks from './MyLinks'
import { SmallSpinner } from "../Small-Components/Spinners/SmallSpinner"
import "../components/pages/css/eachUser.css"
import Axios from 'axios'


export const All = () => {
   const [ dataCards, setdataCards ] = useState([])
   console.log(dataCards)
  useEffect( () =>{
       userAuth()
       Links(setdataCards)
       },[])

 
  let cards 
  if (dataCards.length) {
       cards = dataCards.map((card, id)=> (<MyLinks card={card} key={id}/>))
  }

     return (
          <>
               <div className="all">
                    {cards ? cards: <article className="span"><p>Sorry, seems like you have some server problems</p> <SmallSpinner/> </article>}  
                    
               </div>
          </>
     )

}
const Links = async(setdataCards) => {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/read`
     // , {
     //       mode: 'no-cors',
     //       method: 'GET'
     //       }
           )
     const data = await response.json()
     setdataCards(data)
}

	const userAuth = () => {
  Axios.get(`${process.env.REACT_APP_API_USER}/isAuthenticated`,{
    headers: {
      "Content-Type" : "application/json",
      "access-token": localStorage.getItem("jwt")
    }
  }).then( response => console.log(response.data))
    .catch( error => console.log(error))

}


