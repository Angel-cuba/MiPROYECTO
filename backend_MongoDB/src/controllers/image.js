const ctrl = {};
const path = require('path');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');
const { Image } = require('../models/index')

// const { ImageModel } = require('../models/image')

ctrl.index = async(req, res) => {
         const images =  await Image.find()
         console.log(images);
         
         res.status(200).send(images);
};
ctrl.create =  (req, res) => { 

  const saveImage = async () => {
          const imgUrl = randomName();
          const images = await Image.find({filename: imgUrl})
          //Chequea si está el nombre repetido
          if(images.length > 0){
               saveImage()
          }else{
          const imgTemporalPath = req.file.path;
          const ext = path.extname(req.file.originalname).toLocaleLowerCase();
          const targetSavedPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

          if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
               await fs.copy(imgTemporalPath, targetSavedPath)
                         // .then(() => console.log('Success...!!!'))
                         // .catch(err => console.error(err));
               const url = 'http://localhost:3002/upload/'
                         
               const newImage = new Image({
                              title: req.body.title,
                              filename: url + imgUrl + ext,
                              description: req.body.description
                         }) 
               // console.log(req.body);
               const ImageSaved = await newImage.save()
               console.log(newImage);
                await fs.remove(imgTemporalPath)
                     }else{
               console.log('Nop..!!');
               
               res.status(500).json('Has a mistake')
          }   
          }
        res.status(200).json('Works');
  }
 saveImage()
  
};
ctrl.like = (req, res) => {
	res.send('Like side');
};
ctrl.comment = (req, res) => {
	res.send('Comment');
};

ctrl.remove = (req, res) => {
	res.send('Deleted');
};


module.exports = ctrl;
