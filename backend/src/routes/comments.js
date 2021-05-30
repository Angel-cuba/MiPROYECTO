const router = require('express').Router()


const { newComment, readComments,  updateComment, deleteComment} = require('../controllers/comment-controllers')

//All methods
router.get('/read', readComments)
router.post('/add', newComment )

// by :id
router.put('/update/:id', updateComment)
router.delete('/delete/:id', deleteComment)

module.exports = router