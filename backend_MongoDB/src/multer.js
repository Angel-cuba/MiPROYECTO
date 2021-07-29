const multer = require('multer')
const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, "./")
     },
     filename: function(req, file, cb){
               const ext = file.mimetype.split("/")[1]
               cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`)
     }
})

const Upload = multer({
     storage: storage
})
module.exports = Upload