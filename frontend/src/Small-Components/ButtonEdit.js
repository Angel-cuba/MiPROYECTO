
const ButtonEdit = (card) => {
     const edit = async (id,event) => {
          event.preventDefault();
           const nue=  await fetch(`${process.env.REACT_APP_BACKEND_URL}/getOne/${id}`)
           const data = nue.json()
          console.log(data)
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