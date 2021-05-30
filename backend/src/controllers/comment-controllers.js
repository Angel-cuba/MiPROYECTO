const commentCtrl = {}
const dbConnection = require('../database/db')


commentCtrl.readComments = (req, res) => {
     let sqlQuery = 'SELECT * FROM links'

     dbConnection.query(sqlQuery, (err,results) => {
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

     dbConnection.query(sqlQuery, [newComment.title, newComment.url, newComment.description], (err, result) => {
          if (err) throw err

          res.send('Recieved ')
     })

}

commentCtrl.updateComment = (req, res) => {
     const id = parseInt(req.params.id)
     const { title, url, description} = req.body
     const ToupdateComment={
         title: title,
         url: url, 
         description: description}
     
        if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter')
    }
    if(!title || !url || !description){
         return res.json({
              ErrorCode: 204,
              message: "Fields can't be empty!"
         })
    }
    let sqlQuery = `UPDATE links SET title=${title}, url=${url}, description=${description} WHERE id ${id}`

    dbConnection.query(sqlQuery, [ToupdateComment], (err, result) => {
         if (err) throw err
         if(result.affectedRow === 0){
              res.send('Ooops, something was wrong')
         }
         res.status(200).json(`Comment updated successfully with id= ${id}`)
    })

}

commentCtrl.deleteComment = (req, res) => {
     const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    let sqlQuery = `DELETE FROM links WHERE id = ${id}`

    dbConnection.query(sqlQuery, err => {
         if (err) throw err
         res.status(200).json(`Comment deleted with id= ${id}`)
    })    
}





module.exports = commentCtrl;