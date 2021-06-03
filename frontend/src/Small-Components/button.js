const ButtonDelete = (card) => {
     const deleted =async (id)=> {
   await fetch(`http://localhost:4000/comments/${id}`,{
              method: "DELETE",
          
     }     
   )}     

          return(
               <>
                       {/* <a href={`http://localhost:4000/comments/delete/${id}`} className="btn-block btn-danger">Delete</a> */}
                    <button onClick={()=>deleted(card.id)} className="btn btn-danger btn-sm">Delete</button>
               </>
          )
}

export default ButtonDelete