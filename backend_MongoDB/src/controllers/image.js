const ctrl = {};
const path = require('path');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');

ctrl.index = (req, res) => {
	res.send('Primera ruta');
};
ctrl.create = async (req, res) => {
	const imgUrl = randomName();
	console.log(imgUrl);
	const imgTempPath = req.file.path;
	console.log(imgTempPath);
	const ext = path.extname(req.file.originalname).toLocaleLowerCase();
	const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
	console.log(targetPath);

	if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
		await fs.copy(imgTempPath, targetPath);
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
