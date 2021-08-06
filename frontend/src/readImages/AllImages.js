import { useEffect, useState } from "react"
import "../components/pages/css/blog.css"

export const AllImages = () => {
     const [dataImages, setdataImages] = useState([])

 useEffect( () => {
      Image(setdataImages)
 }, [])

return (
     <>
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