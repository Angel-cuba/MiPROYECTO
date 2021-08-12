import React, { useState }from 'react'
import './css/blog.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const NewImage = ({closeNewImageForm}) => {
      const [file, setFile] = useState()
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
      
 const handleChange = (e) =>{
      setFile(e.target.files[0])
      
 }
 const NewImage = async (e) => {
      e.preventDefault();
           toast.configure();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const Warning = () => {
				toast.info('Uploading images', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000
				})
			}
     
      const formData = new FormData()

      formData.append('image', file)
      formData.append('title', title)
      formData.append('description', description)

    
     await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`,{
               method: 'POST',
               body: formData,
               headers: {
                    'Accept': 'multipart/form-data'
               }
     })
     .then(response => {
          const resImg=response.json()
          
          console.log(resImg)
     }).catch(error => {console.log(error)})
     await delay(Warning(),5000);
     window.location.reload()
 }
   return (
        <>
        {/* <form> 
           <InputRegister type="file" name="image" required/>
           <label htmlFor="image"></label>

           <button type="submit">Upload</button>
        </form> */}
               <form onSubmit={NewImage}>
                                                
                             <div className="form">
                                    <div className="btn-close-modal">
                         <button className="btn_close" onClick={ () => closeNewImageForm(false) }>
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" className="bi bi-upload" viewBox="0 0 16 16">
                                   <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                   <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                   </svg> */}
                             X
                                 
                         </button>

                                    </div>
                                  <div className="image">
                              <label htmlFor="image">                                                                  Choose file </label>
                                  <input type="file" name="image" id="image" onChange={handleChange} required/>
                                  </div>
                                  <div className="name">
                                       <label htmlFor="title">Name</label>
                                   <input type="text" 
                                             placeholder="Name of picture" 
                                             id="title" 
                                             name="title" 
                                             onChange={e => setTitle(e.target.value)}
                                             required/>
                                  </div>
                                  <div className="textarea">
                                       <label htmlFor="description">Description</label>
                                       <textarea name="description" 
                                                       id="description" 
                                                       cols="40" rows="3" 
                                                       placeholder="Description about picture..." 
                                                       onChange={e => setDescription(e.target.value)}
                                                       required></textarea>
                                  </div>
                      
                         <button className="btn_send" type="submit">
                                 {/* <div className="upload">
                                    
                                 </div>                  */}
                                         <h5>Send</h5>
                         </button>
                         </div>
                           </form>
        </>
   )
}
// regex = “([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)”; 