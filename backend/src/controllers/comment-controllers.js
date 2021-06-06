const commentCtrl = {}
const dbConnection = require('../database/db')


commentCtrl.readComments = async(req, res) => {
     let sqlQuery = 'SELECT * FROM links'

     await dbConnection.query(sqlQuery, (err,results) => {
          if (err) throw err
          res.status(200).json(results)
     })
}

commentCtrl.getByIdComment = async (req, res) => {
     const {id} = req.params;
     let sqlQuery = `SELECT * FROM links WHERE id = ${id}`

        if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    await dbConnection.query(sqlQuery, [id], (err, result) => {
         if (err) throw err
         res.status(200).json(result)
    })
}

commentCtrl.newComment= async (req, res) => {
     const comments = req.body

     const newComment = {
          title: comments.title,
          url: comments.url,
          description: comments.description
     }

       // Constant to save time 
  const created_at = new Date(Date.now());

     let sqlQuery =`INSERT INTO links (title,url, description, created_at) VALUE (?,?,?,?)`

   await dbConnection.query(sqlQuery, [newComment.title, newComment.url, newComment.description, created_at], (err, result) => {
          if (err) throw err
          res.redirect('http://localhost:3000/')
     })
}


commentCtrl.updateComment = async (req, res) => {
     const id = parseInt(req.params.id)
     const { title, url, description } = req.body
     
      const ToupdateComment={
        title,
       url, 
       description }


        if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter')
    }
    if(!title || !url || !description){
         return res.json({
              ErrorCode: 204,
              message: "Fields can't be empty!"
         })
    }


    let sqlQuery = `UPDATE links SET ? WHERE id= ${id}`



//title=,url=,description=
  await dbConnection.query(sqlQuery, [ToupdateComment, id], (err, result) => {
         if (err) throw err
         if(result.affectedRow === 0){
              res.send('Ooops, something was wrong')
         }
         res.status(200).json(`Comment updated successfully with id= ${id}`)
    })

}

commentCtrl.deleteComment = async (req, res) => {
     const { id } = req.params
     //  parseInt(req.params)
    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    let sqlQuery = "DELETE FROM links WHERE id = ?"
//     try {
            await dbConnection.query(sqlQuery,[id] ,(err, result)=> {
         if (err) throw err
     //     res.status(200).json(`Comment deleted with id= ${id}`)
     res.redirect('http://localhost:3000/')
          
    }) 
//     } catch (error) {
//          throw new Error
//     }

//    redirect('http://localhost:3000/')   
}





module.exports = commentCtrl;