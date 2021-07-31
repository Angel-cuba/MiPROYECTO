const ctrl = {};
const path = require('path');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');
const { Image } = require('../models/index')

ctrl.index = (req, res) => {
	res.send('Primera ruta');
};
ctrl.create = async (req, res) => {
     console.log(req.file)
	const imgUrl = randomName();
	console.log(imgUrl);
	const imgTemporalPath = req.file.path;
	console.log(imgTemporalPath);
	const ext = path.extname(req.file.originalname).toLocaleLowerCase();
	const targetSavedPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
	console.log(targetSavedPath);

	if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
		await fs.copy(imgTemporalPath, targetSavedPath)
                      .then(() => console.log('Success...!!!'))
                      .catch(err => console.error(err));
            const newImage = new Image({
                          title: req.body.title,
                          filename: imgUrl + ext,
                          description: req.body.description
                    })
          
          // console.log(req.body);
          const ImageSaved = await newImage.save()
          console.log(newImage);
         
	}else{
          console.log('Nop..!!');
           res.status(403).send('Has a mistake')
     }
     res.send('Works');
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
