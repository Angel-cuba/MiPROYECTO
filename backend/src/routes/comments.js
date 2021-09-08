const router = require('express').Router()
const { verifyToken } = require('../routes/middleware/auth')

const { newComment, getByIdComment, readComments,  updateComment, deleteComment} = require('../controllers/comment-controllers')

router.get('/read', readComments)
router.post('/add', newComment )

//by :id
router.get('/getOne/:id', getByIdComment )
router.put('/update/:id', updateComment)
router.delete('/delete/:id', deleteComment)

 module.exports = router