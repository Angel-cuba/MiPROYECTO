const router = require('express').Router();
const dbConnection = require("../../database/db");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  let sqlQuery = "SELECT * FROM users WHERE email = ?"; // Aquí te he quitado el where password

  dbConnection.query(sqlQuery, [email, pass], (err, results) => {
    if (err) {
      res.send({
        code: 400,
        failed: "error occurred",
        err: error,
      });
    } else {
      if (results.length) {
        const encryptedPasswordFromDB = results[0].pass;
        const plainTextPasswordFromBody = req.body.pass;

        const didPasswordMatch = bcrypt.compareSync(plainTextPasswordFromBody, encryptedPasswordFromDB); // Aquí he cambiado el === por bcrypt.compare()

        if (!didPasswordMatch) { 
                    res.send({
        code: 400,
        failed: "error occurred",
        err: "error",
      });
        }else{
     const token = jwt.sign(
            {
              email: req.body.email,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "24h" }
          );
          res.header("auth-token", token).json({
            error: null,
            data: { token },
            message:
              "Hola " + results[0].first_name + " " + results[0].last_name,
          });
        }
      } else {
        res.status(403).json("Email or password incorrect");
      }
    }
  });
});
module.exports = router
// const router = require('express').Router()
// const dbConnection = require('../../database/db')

// const bcrypt = require('bcrypt')
// const jwt =require('jsonwebtoken')

// router.post('/login', async (req, res) => {

//      const { email, pass } = req.body
 
//      let sqlQuery = 'SELECT * FROM users WHERE email = ? AND pass = ? '

//   dbConnection.query(sqlQuery, [email, pass] ,(err, results) => {
//            if(err) {
//                 res.send({          
//                "code":400,          
//                "failed":"error occurred",          
//                "error" : error        
//                })   
                
//            }else {
               
//           if(results.length) {
         
//                if(req.body.pass === results[0].pass){

                              
//      const token = jwt.sign(
//      {
//        email: req.body.email   
//      }, 
//           process.env.TOKEN_SECRET,
//           {expiresIn: '24h'}
//      )
//      res.header('auth-token', token).json({ 
//           error: null,
//           data: {token},
//           message: "Hola "+ results[0].first_name + ' ' + results[0].last_name
//      })
//       }                
//                  }            
//                  else
//                      {    res.status(403).json("Email or password incorrect")
//                                              }    
//                          }
//                })



// })

// module.exports = router