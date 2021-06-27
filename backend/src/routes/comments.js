const router = require('express').Router()
const auth = require('../routes/middleware/auth')

const { newComment, getByIdComment, readComments,  updateComment, deleteComment} = require('../controllers/comment-controllers')



 router.get('/read', readComments)
router.post('/add', newComment )

//by :id
router.get('/edit/:id', getByIdComment )
router.put('/update/:id', updateComment)
// router.get('/delete/:id', deleteComment)

router.delete('/:id', deleteComment)


module.exports = router