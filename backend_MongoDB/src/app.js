const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const express = require('express');
const errorhandler = require('errorhandler');
const cors = require('cors');
// Port from keys.js file
const { serverPORT }= require('./keytoserver/keys')

const { time } = require('./helpers/libs');

const routes = require('./routes/routes');

//El setMaxListeners()
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(5);
for (let i = 0; i < 5; i++) {
	myEmitter.on('event', (_) => console.log(i));
}
myEmitter.emit('event');

module.exports = (app) => {
	app.set('port', serverPORT.PORT || "");

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

	//Configurar Multer
	const ImageName = time();
	const storage = multer.diskStorage({
		destination: path.join(__dirname, 'public/upload'),
		filename: (req, file, cb) => {
			cb(null, ImageName + path.extname(file.originalname));
		},
	});
	app.use(multer({ storage }).single('image'));
	// app.use(multer({ dest: path.join(__dirname, '../public/upload/temp') }).single('image'));
	
	// Para recibir las imágenes que vienen del formulario
	app.use(express.urlencoded({ extended: false }));
	//para manejar likes en las fotos o comentarios
	app.use(express.json());

	//routes
	routes(app);

	//static files
	// app.use('public', express.static(path.join(__dirname, '../public')));
	app.use(express.static(`${__dirname}/public`));

	//errorhandler
	if ('development' === app.get('env')) {
		app.use(errorhandler);
	}

	return app;
};
