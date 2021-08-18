import { DeleteImage } from "../Small-Components/ImageDelete"
export const Images = ({image}) => {

     return (
          <>
                   <div className="images">
                         <div className="images_card">
                              <div className="texto">
                                   <h1>{image.title}</h1>
                                   <h3>{image.description}</h3>
                              </div>
                              <div className="img">
                              <img src={image.imageURL} alt=""/>
                    </div>
                         <DeleteImage id={image._id}/>
                    </div>
               </div>
     </>
               )
}