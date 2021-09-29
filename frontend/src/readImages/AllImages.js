import "../components/pages/css/blog.css"
import { Images } from "./Images";
import { ImgSpinner } from '../Small-Components/Spinners/ImgSpinner'

export const AllImages = ({dataImages, search}) => {
  const FilterImages = dataImages.filter((image) => image.title.toLowerCase().includes(search.toLowerCase()))
return (
     <>
     {
          (dataImages.length) ? ( 
         <div className="AllImages">
                   { 
          FilterImages.map((image, index) =>
           ( <Images image={image} key={index}/> ))
                     }
          </div>
                                   ) 
                          : 

         (
               <div className="nothing-to-show">
                    <div className="content">
                         <ImgSpinner/>
                         {/* <h1>Sorry, <br/> there is nothing to show<br/>😫</h1> */}
                    </div>
                </div>
          )
 
     }
     </>
)
}

