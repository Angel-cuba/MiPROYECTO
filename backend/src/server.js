// require('dotenv').config()

const express = require('express')
const server = require('./app')
const app = server(express())
require('./database/db')

//* Setting port
// const port = 4000;

// function to activate server
//async function server(){
        // await  //Starting server from here
      
             app.listen(app.get('port'))
             console.log('server listening on--->', app.get('port'))


// }
// server()