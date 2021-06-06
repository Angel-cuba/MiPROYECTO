const router = require('express').Router()


const { newComment, getByIdComment, readComments,  updateComment, deleteComment} = require('../controllers/comment-controllers')

//All methods to check
router.get('/read', readComments)

router.post('/add', newComment )

//by :id
router.get('/:id', getByIdComment )
router.put('/update/:id', updateComment)
// router.get('/delete/:id', deleteComment)

router.delete('/:id', deleteComment)


module.exports = router