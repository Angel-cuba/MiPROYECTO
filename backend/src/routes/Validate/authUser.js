const router = require('express').Router()
const dbConnection = require('../../database/db')


router.post('/login', async (req, res) => {

     const { email, pass } = req.body
 

     let sqlQuery = `SELECT * FROM users WHERE email = ? AND pass = ?`

     dbConnection.query(sqlQuery, [email,pass] ,(err, results) => {

          if (err) {
               throw err
          }
          else {
               res.status(200).json(results)
          }
     })


})

module.exports = router