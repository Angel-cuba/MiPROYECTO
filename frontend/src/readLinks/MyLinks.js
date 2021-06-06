import ButtonDelete from '../Small-Components/button'
import * as timeago from 'timeago.js'


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
  const mytimeago = timeago.format(`${card.created_at}`);
 //  timeago.render(document.querySelectorAll('.demo'))

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
                    {/* <div className="created_at">
                         <h2>{card.created_at}</h2>
                    </div> */}
                    <div className="mytimeago">
                         {mytimeago}
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