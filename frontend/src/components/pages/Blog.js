import React, {useState, useEffect} from 'react';
import './css/blog.css';
import { AllImages } from '../../readImages/AllImages'
import { NewImage } from '../../components/pages/NewImage'


 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
     const [Open, setOpen] = useState(false)
     const [dataImages, setdataImages] = useState([])
     const [search, setSearch]  = useState('')


  
 useEffect( () => {
      Image(setdataImages)
 }, [])



     return (
          <div className="blog">
                
               <button className="btn-open-modal" onClick={()=> setOpen(true)}>New Image</button>
               {Open && <NewImage closeNewImageForm={setOpen}/>}
                     <label for="Images"></label>
                    <input className="findImginput" type="text" placeholder="Find yours images....."
                    onChange={(event) => setSearch(event.target.value)}/>
                    <AllImages dataImages={dataImages} search={search}/>
          </div>
     )
}


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const Image = async(setdataImages) => {
      toast.configure();
 const response = await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`)
 const data = await response.json()
 console.log(data)
 const Warning = () => {
 				toast.info('Time of responses', {
					position: toast.POSITION.TOP_CENTER,
 					autoClose: 1000
 				})
			}
 await delay(Warning(),4000);
 console.log('Now.....!')
 setdataImages(data)
 
}

export default Blog;