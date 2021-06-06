import { useEffect, useState } from "react"
import OneLink from './OneLinkById'




const One = () => {
          const [ oneData, setoneData ] = useState([])
   
       //testing timeago

//   useEffect( () => Links(setdataCards),[])


  let card
  if (oneData) {
       card = oneData.map(card => (
            <OneLink
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
     <div className="container p-4">
                    <div className="col-md-4  mx-auto">
                         <div className="card ">
                              <div className="card-body">
                                   <form action={`http://localhost:4000/comments/:id`} method="GET">
                                        <div className="form-group">
                                             <input type="text" className="form-control" name="title" placeholder="Title" autoFocus >{card.title}</input>
                                             </div>
                                             <div className="form-group">
                                                  <input type="text" className="form-control" name="url" placeholder="Url">{card.url}</input>
                                             </div>
                                             <div className="form-group">
                                                  <textarea name="description"  className="form-control"  id="" rows="2" placeholder="Description">{card.description}</textarea>
                                             </div>
                                           <div className="form-group">
                                                <button className="btn btn-success btn-block">Save</button>
                                           </div>
                                   </form>
                              </div>
                         </div>
                    </div>

            </div>
 

     </>
)


}
const Links = async(setdataCards, id) => {
     const response = await fetch(`http://localhost:4000/comments/${id}`)
     const data = await response.json()
     setdataCards(data)
}


export default One