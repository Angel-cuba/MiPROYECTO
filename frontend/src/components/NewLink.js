const NewLinks = () => {


     return (
          <>
            <div className="container p-4">
                    <div className="col-md-4  mx-auto">
                         <div className="card ">
                              <div className="card-body">
                                   <form action="http://localhost:4000/comments/add" method="POST">
                                        <div className="form-group">
                                             <input type="text" className="form-control" name="title" placeholder="Title" autoFocus />
                                             </div>
                                             <div className="form-group">
                                                  <input type="text" className="form-control" name="url" placeholder="Url"/>
                                             </div>
                                             <div class="form-group">
                                                  <textarea name="description"  className="form-control"  id="" rows="2" placeholder="Description"/>
                                             </div>
                                           <div class="form-group">
                                                <button className="btn btn-success btn-block">Save</button>
                                           </div>
                                   </form>
                              </div>
                         </div>
                    </div>

            </div>
             
          </>
     )

}

export default NewLinks
