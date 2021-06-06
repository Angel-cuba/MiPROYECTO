require('dotenv').config()

const app = require('./app')
require('./database/db')

//* Setting port
// const port = 4000;

// function to activate server
async function server(){
          //Starting server from here
      
             await app.listen(app.get('port'))
             console.log('server listening on--->', app.get('port'))


}
server()