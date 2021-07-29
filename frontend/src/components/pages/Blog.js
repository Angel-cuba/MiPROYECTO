import React from 'react';

 
const Blog = () => {
 
 const NewImage = async (e) => {


     const file = e.target.files[0]
      const f = new FormData()
      f.append('image', file)

    
     await fetch('http://localhost:3002/images',{
               method: 'POST',
               body: f,
               headers: {
                    'Accept': 'multipart/form-data'
               }
     })
     .then(response => {
          const resImg=response.json()
          
          console.log(resImg)
     }).catch(error => {console.log(error)})
     //  ,{
     //       method: 'POST'
     //  })

 }

     return (
          <div className="pages">
                    <h1>
                         La parte del Blog
                    </h1>
                    
                    <form action="http://localhost:3002/images" method="POST"  encType="multipart/form-data">

                         {/* <InputRegister type="file" name="Blog"/>action="" enctype="multipart/form-data"
                             <InputRegister type="file" name="image" required/> onChange={NewImage}*/}
                             <div className="form">
                                  <div className="image">
                                       <label htmlFor="image">                                                                  Choose file </label>
                                  <input type="file" name="image" id="image" required/>
                                  </div>
                                  <div className="name">
                                       <label htmlFor="Iname">Name</label>
                                   <input type="text" placeholder="Name of picture" id="Iname" name="Iname" required/>
                                  </div>
                                  <div className="textarea">
                                       <label htmlFor="textara">Description</label>
                                       <textarea name="textarea" id="textarea" cols="40" rows="3" placeholder="Description about picture..." required></textarea>
                                  </div>
                                   
                             
                                 
                         <input type="submit">
                            
                                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                   <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                   <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                   </svg> Send */}
                                   
                         </input>
                         </div>
                              </form>
                    
          </div>
     )
}

export default Blog;