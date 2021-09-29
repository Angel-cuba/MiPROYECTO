const jwt = require('jsonwebtoken')

const userVerify = {};
// Authorization
userVerify.verifyToken = (req, res, next) => {

    const strUser = req.headers["access-token"]
//     console.log(req.headers)
    console.log('---ACCESS-TOKEN-FROM-USER--------',strUser)
  //   const Token  = req.data.token
 const Token = strUser.replace(/^"(.*)"$/, '$1');
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