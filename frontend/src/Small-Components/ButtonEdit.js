const ButtonEdit = (card) => {
     const edit = async (id) =>{
           const nue=  await fetch(`http://localhost:4000/comments/${id}`)
          console.log(nue)
     }
   

 return(
      <>
           <button onClick={()=>edit(card.id)} className="btn btn-success btn-sm">
                <a href={`http://localhost:3000/One/${card.id}`}>Edit</a>
                </button>

      </>
 )
}

export default ButtonEdit