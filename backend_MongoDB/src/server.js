const express = require('express');
const server = require('./app')
const app = server(express())

require('./database/db')
 

app.listen(app.get('port'), () => {
     console.log('Server on port ', app.get('port'))
})
