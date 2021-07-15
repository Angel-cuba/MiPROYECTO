// import { useState, useEffect } from 'react'
import ButtonDelete from '../Small-Components/ButtonDelete'
import ButtonEdit from '../Small-Components/ButtonEdit'
import * as timeago from 'timeago.js'


const OneById = (card) => {
     // const [ oneData, setoneData ] = useState([])

  const mytimeago = timeago.format(`${card.created_at}`);

// useEffect(() => Link(setoneData), [])
//      console.log(oneData)

     return (
          <>
          {/* <h1>Hola</h1> */}
           <div className="MyLinks">
                <div className="card classCard">
                    <h5 className="card-header">{card.title}</h5>
                    <div className="card-body">
                    <h5 className="card-title">{card.url}</h5>
                    <p className="card-text">{card.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    {/* <div className="created_at">
                         <h2>{card.created_at}</h2>
                    </div> */}
                    <div className="mytimeago">
                         {mytimeago}
                    </div>

                    <div className="button">
                              <ButtonDelete id={card.id}/>
                              <ButtonEdit id={card.id}/>
                    {/* <button className="btn btn-success btn-sm">Edit</button> */}
                    </div>
                   
               </div>
           </div>
          </>
     )
}

// const Link = async (setoneData, id, event) => {
//      event.preventDefault()
//      const response = await fetch(`http://localhost:4000/comments/getOne/${id}`)
//      const data = await response.json()
//      console.log(data)
//      setoneData(data)
// }

export default OneById