import { useEffect, useState } from "react"
import Images from './Images'


export const AllImages = () => {
     const [dataImages, setdataImages] = useState([])

 useEffect( () => {
      Image(setdataImages)
 }, [])


  


}
const Image = (setdataImages) => {

}