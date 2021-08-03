import { useEffect, useState } from "react"
import { Images } from './Images'
import "../components/pages/css/blog.css"

export const AllImages = () => {
     const [dataImages, setdataImages] = useState([])

 useEffect( () => {
      Image(setdataImages)
     //  console.log(dataImages)
 }, [])

 let images
 if(dataImages.length){
      images = dataImages.map(image => (
           
           <Images 
           key={image._id}
           title={image.title}
          src={image.filename}
           description={image.description}
           />
      ))
 }

return (
     <>
     <div className="AllImages">
          {/* {images} */}
               {dataImages.map(i => (
                    <div key={i._id} className="images">
                         <div className="images_card">
                              

                              <div className="texto">
                              <h1>{i.title}</h1>
                              <h3>{i.description}</h3>
                         </div>

                              <div className="img">
                              <img src={i.filename} alt=""/>
                         </div>
                            
                    
                         
                         </div>
                         
                         
                    </div>
               ))}
     </div>
     
     
     
     </>
)

  


}
const Image = async(setdataImages) => {
 const response = await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`)
 const data = await response.json()
 console.log(data)
 setdataImages(data)
}