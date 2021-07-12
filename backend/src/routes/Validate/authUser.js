const router = require('express').Router();
const dbConnection = require("../../database/db");
const commentCtrl = {}


const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  let sqlQuery = "SELECT * FROM users WHERE email = ?"; // Aquí te he quitado el where password

  dbConnection.query(sqlQuery, [email, pass], (err, results) => { 
    if (!req.body.email || !req.body.pass) {
      res.send({
        code: 400, 
        message: "Fields can't be empty",
        err: err
      });   
    } else { 
      if (results.length>0) { 
        const encryptedPasswordFromDB = results[0].pass;
        const plainTextPasswordFromBody = req.body.pass;
 
        const didPasswordMatch = bcrypt.compareSync(plainTextPasswordFromBody, encryptedPasswordFromDB); // Aquí he cambiado el == por bcrypt.compare()
 
        if (!didPasswordMatch) { 
        res.status(403).send("Wrong password, plzz check it again!!")
        }
           else{
                  const token = jwt.sign(
                                        {email: req.body.email},process.env.TOKEN_SECRET,{ expiresIn: "24h" }
                                                  );
           res.header("auth-token", token).json({
              userDB: results,
              token
              });
          }
       }   
          else {
            res.status(403).send("Email not found and be carefull with password!!")
          } 
    }
  });
});
  
//Check to make sure header is not undefined, if so, return Forbidden (403)
// const checkToken = (req, res, next) => {
//     const header = req.headers['authorization'];

//     if(typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const token = bearer[1];

//         req.token = token;
//         next();
//     } else {
//         //If header is undefined return Forbidden (403)
//         res.sendStatus(403)
//     }
// }
// //Buscando datos del user mediante el TOKEN
// router.get('/data',  checkToken ,(req, res) => {
//                 // res.json({user: 'user'})
 
//   //verify the JWT token generated for the user
//         jwt.verify(req.data.token, process.env.TOKEN_SECRET, (err, authorizedData) => {
//             if(err){
//                 //If error send Forbidden (403)
//                 console.log('ERROR: Could not connect to the protected route');
//                 res.sendStatus(403);
//             } else {
//                 //If token is successfully verified, we can send the autorized data 
//                 res.json({
//                     message: 'Successful log in',
//                     authorizedData
                
//                 });
//                 console.log('SUCCESS: Connected to protected route');
//             }
//         })
 
// })


module.exports = router
