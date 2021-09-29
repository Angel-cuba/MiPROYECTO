const router = require('express').Router()

const { newUser, updateUser, deleteUser, getOneUser, authorizationUser } = require('../controllers/user-controller')
 const { verifyToken } = require('./middleware/auth')
 

//Aqui hago el REGISTER mediante el método POST
 router.post('/register', newUser)
 router.get('/isAuthenticated', verifyToken, authorizationUser)


//Controlar mediante el id
//http://localhost:3000/api/user/id
router.get('/:id', getOneUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router      
