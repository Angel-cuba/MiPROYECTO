const NewLinks = () => {




     return (
          <>
            <div className="container p-4">
                    <div class="col-md-4  mx-auto">
                         <div class="card ">
                              <div class="card-body">
                                   <form action="http://localhost:3000/comments/add" method="POST">
                                        <div class="form-group">
                                             <input type="text" className="form-control" name="title" placeholder="Title" autofocus />
                                             </div>
                                             <div class="form-group">
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
