const router = require('express').Router()
const dbConnection = require('../../database/db')

const bcrypt = require('bcrypt')


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
               
                    if(results.length > 0) {
                         const comparison = bcrypt.compare(pass, results[0].pass) 
                              const checkingEmail = results[0].email
                         // if(email != checkingEmail){
                         //                               res.send({            
                         //                                    "code":206,            
                         //                                    "error":"Email does not exist"              
                         //                                    });  
                         //                               }
                         if(comparison){
                              res.send({                
                                   "code":200,                
                                   "success":"login successful",
                         })
                          }
                         
                 }                      
               

                 else
                     {    res.status(403).json("Email or password incorrect")
                                             }    
                         }
               })
})

module.exports = router