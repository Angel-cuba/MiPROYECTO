import { useEffect, useState } from "react"
import OneById from './OneLinkById'
import { useParams } from 'react-router-dom'
import './../components/pages/css/one.css'

const One = () => {
         const { id }  = useParams()  
          const [ oneData, setoneData ] = useState([])
   
       //testing timeago

  useEffect( () =>Links(setoneData) ,[])

const Links = async(setoneData) => {
     const response = await fetch(`http://localhost:4000/comments/getOne/${id}`)
     const data = await response.json()
     console.log(data[0])
     setoneData(data[0])}

return (
     <>
     {/* <h1>Hola</h1><h1>{oneData.description}</h1> */}
     <div className="update_one">
          <OneById title={oneData.title} 
                         url={oneData.url}
                         description={oneData.description}
               />
     {/* <input type="text">{oneData.url}</input> */}
     </div>     
     </>
)


}




export default One