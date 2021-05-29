const userCtrl = {}
const dbConnection = require('../database/db')

const bcrypt = require('bcrypt')

userCtrl.newUser = async(req, res) => {

     //Recojo los datos del user
      const user = req.body

     //Encriptar el password
     const encrypt = await bcrypt.genSalt(10)
 const hashpass = await bcrypt.hashSync(req.body.pass, encrypt)

          // Objeto de nuevo usuario, se iguala [pass(encriptada):pass]
          let datetime = new Date();
          const newUser ={
              first_name:user.first_name,
               last_name: user.last_name,
              email: user.email,
              pass: hashpass,
              }
          
     // Checking empty fields
     if (!user.first_name || !user.last_name || !user.email ||!user.pass) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }
    // Constant to save time 
  const created_at = new Date(Date.now());
    
    //Query
    let sqlQuery = `INSERT INTO users(first_name, last_name, email, pass,created_at)  VALUES (?,?,?,?, ?)`//

    dbConnection.query(sqlQuery, [newUser.first_name, newUser.last_name, newUser.email, newUser.pass, created_at], (err, result) => {
         if(err) throw err
             
         res.status(201).json({"message":"User inside DB", result: result})
    })
}

userCtrl.updateUser = (req, res) => {
     res.json('Update')
}

userCtrl.deleteUser = (req, res) => {
     res.json('Delete User')
}


module.exports = userCtrl;