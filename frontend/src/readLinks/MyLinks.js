const MyLinks = ({id, title, url, description}) => {


     return (
          <>
          
               <div className="card classCard mx-auto">
                    <h5 className="card-header">{title}</h5>
                    <div className="card-body">
                    <h5 className="card-title">{url}</h5>
                    <p className="card-text">{description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <a href={`http://localhost:4000/comments/delete/${id}`} className="btn-block btn-danger">Delete</a>
                    {/*  */}
                    <a className="btn btn-success">Edit</a>
               </div>

          </>
     )
}



export default MyLinks