const ctrl = {}

ctrl.index = (req, res) => {
          res.send('Primera ruta')
}
ctrl.create = (req, res) => {
     console.log(req.file)
     res.send('Works')
     
}
ctrl.like = (req, res) => {
     res.send('Like side')
}

ctrl.comment = (req, res) => {
     res.send('Comment')
}

ctrl.remove = (req, res) => {
     res.send('Deleted')
}

module.exports = ctrl