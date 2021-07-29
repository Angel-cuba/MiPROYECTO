const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const express = require('express');
const errorhandler = require('errorhandler');
const cors = require('cors');
// const Upload  = require('./multer')

const routes = require('./routes/routes');

module.exports = (app) => {
	app.set('port', process.env.PORT || 3002);

	app.use(function (req, res, next) {
		res.header({ 'Access-Control-Allow-Headers': '*' });
		next();
	});
	let options = {
		origin: '*',
		method: 'POST, GET, PUT, DELETE',
	};

	app.use(cors(options));

	//middlewares
	app.use(morgan('dev'));
	app.use(multer({ dest: path.join(__dirname, '../public/upload/temp') }).single('image'));
	//  app.use(Upload)
	// Para recibir las imágenes que vienen del formulario
	app.use(express.urlencoded({ extended: false }));
	//para manejar likes en las fotos o comentarios
	app.use(express.json());

	//routes
	routes(app);

	//static files
	app.use('public', express.static(path.join(__dirname, '../public')));

	//errorhandler
	if ('development' === app.get('env')) {
		app.use(errorhandler);
	}

	return app;
};
