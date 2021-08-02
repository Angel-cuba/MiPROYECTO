export const Images = (image) => {

     return (
          <>
               <div className="Images">
                    <h1>{image.title}</h1>
                    <div className="image_body">
                         <img src={image.filename} alt=""/>
                    </div>
                    <div className="image_comment">
                         <p>{image.description}</p>
                    </div>
               </div>
          </>
     )
}