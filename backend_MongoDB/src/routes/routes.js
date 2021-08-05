const express = require('express')
const router = require('express').Router()

const image = require('../controllers/image')

module.exports = app => {
     router.get('/images', image.index)

     router.get('/images/:imageId', image.index)

     router.post('/images', image.create)

     router.post('/images/:imageId/like', image.like)

     router.post('/images/:imageId/comment', image.comment)

     router.get('/images/delete/:image_id', image.remove)

     app.use(router)

}