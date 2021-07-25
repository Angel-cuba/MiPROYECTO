const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const express = require('express')
const errorhandler = require('errorhandler')

const routes = require('./routes/routes')

module.exports = (app) => {
          app.set('port', process.env.PORT || 3002)

          //middlewares
          app.use(morgan('dev'))
          app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'))
          // Para recibir las imágenes que vienen del formulario
          app.use(express.urlencoded({extended: false}))
          //para manejar likes en las fotos o comentarios
          app.use(express.json())

          //routes        
          routes(app)

          //static files
          app.use('public', express.static(path.join(__dirname, '../public')))

          //errorhandler
          if('development' === app.get('env')){
               app.use(errorhandler)
          }
          
return app
}