import React, {useState} from 'react';
import './css/blog.css';
import { AllImages } from '../../readImages/AllImages'
import { NewImage } from '../../components/pages/NewImage'


const Blog = () => {
     const [Open, setOpen] = useState(false)
  

     return (
          <div className="blog">
               <button className="btn-open-modal" onClick={()=> setOpen(true)}>New Image</button>
               {Open && <NewImage closeNewImageForm={setOpen}/>}
                    
                    <AllImages/>
          </div>
     )
}

export default Blog;