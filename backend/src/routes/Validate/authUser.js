const router = require('express').Router();
const dbConnection = require("../../database/db");


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
                    res.send({
        code: 400,
        failed: "error occurred in password field",
        message: "Wrong password, but remember to check the email too",
        err: "error",
      });
        }
           else{
     const token = jwt.sign(
            {
              email: req.body.email,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "24h" }
          );
          res.header("auth-token", token).json({
            token: token ,
            results
              });
        }
       }   
       else {
        res.send({
        code: 403,
        failed: "error occurred from email side",
        message: "Email not found and be carefull with password",
        err: "error",
      });
      }
    }
  });
});
module.exports = router
