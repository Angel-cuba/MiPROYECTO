const commentCtrl = {}
const dbConnection = require('../database/db')


commentCtrl.readComments = async(req, res) => {
     let sqlQuery = 'SELECT * FROM links'

     await dbConnection.query(sqlQuery, (err,results) => {
          if (err) throw err
          res.status(200).json(results)
     })
}

commentCtrl.newComment= async (req, res) => {
     const comments = req.body

     const newComment = {
          title: comments.title,
          url: comments.url,
          description: comments.description
     }

     let sqlQuery =`INSERT INTO links (title,url, description) VALUE (?,?,?)`

   await dbConnection.query(sqlQuery, [newComment.title, newComment.url, newComment.description], (err, result) => {
          if (err) throw err
          res.redirect('http://localhost:3000/')
     })
}


commentCtrl.updateComment = (req, res) => {
     const id = parseInt(req.params.id)
     const { ComingComment } = req.body
     const ToupdateComment=[
        title= ComingComment.title,
        url = ComingComment.url, 
        description  = ComingComment.description
        ]
     
        if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter')
    }
    if(!ComingComment.title || !ComingComment.url || !ComingComment.description){
         return res.json({
              ErrorCode: 204,
              message: "Fields can't be empty!"
         })
    }
    let sqlQuery = `UPDATE links SET (title,url, description) VALUES (?,?,?) WHERE id ${id}`
//title=,url=,description=
    dbConnection.query(sqlQuery, [ToupdateComment.title, ToupdateComment.url, ToupdateComment.description], (err, result) => {
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
    try {
            await dbConnection.query(sqlQuery,[id] ,(err)=> {
         if (err) throw err
         res.status(200).json(`Comment deleted with id= ${id}`)
          
    }) 
    } catch (error) {
         throw new Error
     
    }


//    redirect('http://localhost:3000/')   
}





module.exports = commentCtrl;