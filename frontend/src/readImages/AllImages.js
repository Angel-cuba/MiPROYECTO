import { useEffect, useState } from "react"
import "../components/pages/css/blog.css"
import { DeleteImage } from "../Small-Components/ImageDelete"

 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export const AllImages = () => {
const [dataImages, setdataImages] = useState([])


 useEffect( () => {
      Image(setdataImages)
 }, [])


return (
     <>
     {
          (dataImages.length) ? ( 
           <div className="AllImages">
               {dataImages.map(image => (
                    <div key={image._id} className="images">
                         <div className="images_card">
                              
                              <div className="texto">
                              <h1>{image.title}</h1>
                              <h3>{image.description}</h3>
                             
                         </div>

                              <div className="img">
                              <img src={image.imageURL} alt=""/>
                         </div>
                              <DeleteImage id={image.id}/>
                         
                         </div>
                         

                    </div>
               ))}
     </div>
     ) 
          : 
          <h1>Sorry, there is nothing to show</h1>
     }
     </>
)
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function something() {
//     console.log("this might take some time....");

//     await delay(5000);
//     console.log("done!")
// }
const Image = async(setdataImages) => {
      toast.configure();
 const response = await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`)
 const data = await response.json()
 console.log(data)
 const Warning = () => {
 				toast.info('Time of responses', {
					position: toast.POSITION.TOP_CENTER,
 					autoClose: 3000
 				})
			}


 await delay(Warning(),3000);
 console.log('Now.....!')
 setdataImages(data)
 
}