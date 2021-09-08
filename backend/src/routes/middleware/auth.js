const jwt = require('jsonwebtoken')

const userVerify = {};
// Authorization
userVerify.verifyToken = (req, res, next) => {

    const str = req.headers["access-token"]
//     console.log(req.headers)
    console.log(req.headers["access-token"])
  //   const Token  = req.data.token
 const Token = str.replace(/^"(.*)"$/, '$1');
  console.log("token",Token)
    if(!Token){ 
          res.send('Ooops request was refused')
     } 
  try {
          const decoded = jwt.verify(Token, process.env.TOKEN_SECRET)
          req.userEmail = decoded.email
          console.log(decoded)
          console.log(req.userEmail)
       next();   
  } 
  catch (error) {
      console.log(error);
          }
  
};


module.exports = userVerify;