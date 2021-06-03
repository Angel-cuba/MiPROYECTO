import ButtonDelete from '../Small-Components/button'

const MyLinks = (card) => {
     // {id, title, url, description}
     //  const deleted =async (id)=> {
     //     await fetch(`http://localhost:4000/comments/delete/${id}`,{
     //          method: "DELETE",
     //     })
     //      // console.log(e.target)
     //      // , {
     //      //      method: "DELETE",
     //      // }
     // }          

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
                        
                               <ButtonDelete id={card.id}/>
                    <button className="btn btn-success btn-sm">Edit</button>
                    </div>
                   
               </div>
           </div>
               

          </>
     )
}



export default MyLinks