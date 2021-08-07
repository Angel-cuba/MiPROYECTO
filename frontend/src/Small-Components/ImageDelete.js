
export const DeleteImage = (image) =>{
      const deleteImg =async (_id)=>{
          
          await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}/delete/${_id}`,{
           method: "DELETE"
      })
      .then(response => response.json())
      .catch(error =>console.log(error))
      console.log(_id)
      window.location.reload()
      }
      return(
               <>
                 <div className="btn_D">
                              <button type="submit" onClick={()=> deleteImg(image._id)} className="btn_delete">Delete😕</button>
                         </div>
               </>
      )
     
 }