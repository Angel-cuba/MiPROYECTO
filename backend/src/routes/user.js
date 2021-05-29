const router = require('express').Router()

const { newUser, updateUser, deleteUser } = require('../controllers/user-controller')

//Aqui hago el REGISTER mediante el método POST
 router.post('/register', newUser)
 


//Controlar mediante el id
//http://localhost:3000/api/user/id
// router.route('/:id')
router.put('/update', updateUser)
router.delete('/delete', deleteUser)

module.exports = router
