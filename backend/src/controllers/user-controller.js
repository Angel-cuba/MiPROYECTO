const userCtrl = {}
const dbConnection = require('../database/db')

const bcrypt = require('bcrypt')
   
userCtrl.newUser = async(req, res) => {
     //Recojo los datos del user
      const { first_name,last_name, email, pass } = req.body

     //Encriptar el password
     const encrypt = await bcrypt.genSalt(10)
 const hashpass = await bcrypt.hashSync(req.body.pass, encrypt)

          // Objeto de nuevo usuario, se iguala [pass(encriptada):pass]
          let datetime = new Date();
          const newUser ={
               first_name,
               last_name,
               email,
               pass: hashpass
              }
 
          
     // Checking empty fields
     if (!first_name || !last_name || !email ||!pass) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    } 
  
    //Query
    let sqlQuery = 'INSERT INTO users SET ?'//

    dbConnection.query(sqlQuery, [newUser], (err, result) => {
         if(err) throw err
             
         res.status(201).json({"message":"User inside DB", result: result})
    })
}



userCtrl.getOneUser = async (req, res) => {
     const { id } = req.params
     let sqlQuery = `SELECT * FROM users WHERE id = ${id}`

      if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }
   
  
    await dbConnection.query(sqlQuery, [id], (err, result) => {
         if (err) throw err
         res.status(200).json(result)
    })
}

userCtrl.authorizationUser = async (req, res) => {
     try {
           res.json('Authentication request Ok')
     } catch (error) {
         console.log(error) 
     }
   
    
}
userCtrl.updateUser = (req, res) => {
     res.json('Update')
}

userCtrl.deleteUser = (req, res) => {
     res.json('Delete User')
}


module.exports = userCtrl; 