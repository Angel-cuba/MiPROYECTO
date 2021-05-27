const userCtrl = {}
const dbConnection = require('../database/db')
const dbConnections = require('../database/db')


userCtrl.newUser = (req, res) => {
//     res.json('New User')
          const user = req.body

          const newUser = [
               user.first_name,
               user.last_name,
               user.email,
               user.pass
          ]
     ////////////////////////////////  
     if (!user.first_name || !user.last_name || !user.email ) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }


    let sqlQuery = 'INSERT INTO users (first_name, last_name, email, pass) VALUES (?,?,?,?)'

    dbConnection.query(sqlQuery, newUser, (err, result) => {
         if(err) throw err

         res.status(201).json('User inside database '+ result)

    })

}

userCtrl.updateUser = (req, res) => {
     res.json('Update')
}

userCtrl.deleteUser = (req, res) => {
     res.json('Delete User')
}

module.exports = userCtrl;