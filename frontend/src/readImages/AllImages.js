import { useEffect, useState } from "react"
import { Images } from './Images'


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
     
      {images}
      {dataImages.map(i => (
           <div key={i._id}>
                <h3>{i.description}</h3>
                <h1>{i.title}</h1>
                <img src={i.filename} alt=""/>
           </div>
      ))}
     
     </>
)

  


}
const Image = async(setdataImages) => {
 const response = await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`)
 const data = await response.json()
 console.log(data)
 setdataImages(data)
}