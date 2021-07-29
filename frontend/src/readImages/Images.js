export const Images = (image) => {

     return (
          <>
               <div className="Images">
                    <div className="image_body">
                         <img src={image.image} alt=""/>
                    </div>
                    <div className="image_comment">
                         <p>{image.comment}</p>
                    </div>
               </div>
          </>
     )
}