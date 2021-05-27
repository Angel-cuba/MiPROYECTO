const router = require('express').Router()
const dbConnection = require('../../database/db')

const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const {newUser} = require('../../controllers/user-controller')


router.post('/login', async (req, res) => {

     const { email, pass } = req.body
 
     let sqlQuery = 'SELECT * FROM users WHERE email = ? AND pass = ? '

  dbConnection.query(sqlQuery, [email, pass] ,(err, results) => {
           if(err) {
                res.send({          
               "code":400,          
               "failed":"error occurred",          
               "error" : error        
               })   
                
           }else {
               //  const hash = newUser.pass
               
                    if(results.length > 0) {
                         const comparison = bcrypt.compare(pass, results[0].pass)//bcrypt.hash(results[0].pass) //
                              const checkingEmail = results[0].email

                          
                         // Aqui muestro datos que vienen desde la base de datos                         }
                         // if(comparison){
                         //      res.status(200).json("Hola "+ results[0].first_name + ' ' + results[0].last_name)
                         //  }
                         
                 }                      
               

                 else
                     {    res.status(403).json("Email or password incorrect")
                                             }    
                         }
               })


const token = jwt.sign(
     {
       email: req.body.email   
     },
          process.env.TOKEN_SECRET,
          {expiresIn: '24h'}
     )
     res.header('auth-token', token).json({ 
          error: null,
          data: {token}
     })
})

module.exports = router