// import Button from '../Small-Components/button'

const MyLinks = (card) => {
     // {id, title, url, description}
      const deleted =async (id)=> {
         await fetch(`http://localhost:4000/comments/delete/${id}`,{
              method: "DELETE",
         })
          // console.log(e.target)
          // , {
          //      method: "DELETE",
          // }
     }          

     return (
          <>
           <div className="MyLinks">
                <div className="card classCard">
                    <h5 className="card-header">{card.title}</h5>
                    <div className="card-body">
                    <h5 className="card-title">{card.url}</h5>
                    <p className="card-text">{card.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <div className="button">
                           {/* <a href={`http://localhost:4000/comments/${card.id}`}                            className="btn-block btn-warning">Useeee</a> */}
                               {/* <Button key={id}/> */}
                               <button onClick={()=>deleted(card.id)} className="btn btn-danger">Borrar</button>
                    <a className="btn btn-success btn-sm">Edit</a>
                    </div>
                   
               </div>
           </div>
               

          </>
     )
}



export default MyLinks