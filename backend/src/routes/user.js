const router = require('express').Router()

const { newUser, updateUser, deleteUser, getOneUser } = require('../controllers/user-controller')

//Aqui hago el REGISTER mediante el método POST
 router.post('/register', newUser)
 


//Controlar mediante el id
//http://localhost:3000/api/user/id
router.get('/:id', getOneUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
