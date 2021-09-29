const express = require('express')
const router = require('express').Router()

const image = require('../controllers/image')

module.exports = app => {
     //GET IMAGES
     router.get('/images', image.index)

     router.get('/images/:imageId', image.index)

     //CREATE 
     router.post('/images', image.create)

     router.post('/images/:imageId/like', image.like)

     router.post('/images/:imageId/comment', image.comment)

     //DELETE ok
     router.delete('/images/delete/:id', image.remove)

     app.use(router)
 
}