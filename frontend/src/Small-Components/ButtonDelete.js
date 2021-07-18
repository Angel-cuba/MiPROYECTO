import { useHistory } from 'react-router-dom'

const ButtonDelete = (card) => {

     const history = useHistory()
     const deleted =async (id)=> {
  
await fetch(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`, {
                               method: "DELETE"          
                         }) 
   .then((response)=> response.json() )               
//.then((data)=> console.log(data))
   .catch((error)=>console.log(error))
  window.location.reload()
  history.push('/eachUser')
   }     

          return(
               <>
                    <button type="submit" onClick={()=>deleted(card.id)} className="btn btn-danger btn-sm">Delete</button>
               </>
          )
}

export default ButtonDelete