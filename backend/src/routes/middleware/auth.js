const jwt = require('jsonwebtoken')


// Authorization
module.exports = (req, res, next) => {
 const token = req.headers["x-access-token"];

    if (!token) {
              return res.status(403).send({
                   message: "no token provided"
              })     

    }
     // //    const token = authHeader.split(' ')[1];
// console.log(authHeader)
 console.log(token)
        jwt.verify(token, process.env.TOKEN_SECRET , (err, decoded) => {
            if (err) {
                return res.status(401).send({
                     message: "Unauthorized"
                });
            }

            req.userId = decoded.id;
            next();
        });
    



};