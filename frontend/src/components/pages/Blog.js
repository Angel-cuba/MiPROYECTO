import React, { useState } from 'react';
import './css/blog.css';
import { AllImages } from '../../readImages/AllImages'
 
const Blog = () => {

   const [file, setFile] = useState()
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
      
 const handleChange = (e) =>{
      setFile(e.target.files[0])
      
 }
 const NewImage = async (e) => {
      e.preventDefault();

     
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

     window.location.reload()
 }

     return (
          <div className="blog">
                    <form onSubmit={NewImage}>
                             <div className="form">
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
                                       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" className="bi bi-upload" viewBox="0 0 16 16">
                                   <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                   <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                   </svg>
                                 </div>                  */}
                                         <h5>Send</h5>
                         </button>
                         </div>
                           </form>
                    <AllImages/>
          </div>
     )
}

export default Blog;