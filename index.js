require('dotenv').config({
	path: `${process.env.NODE_ENV}.env`,
});
// console.log(process.env.MONGO_URI)
const express = require('express');

const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const {mongooseConnect} = require('./models');

const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');

//
const app = express();

//
app.use(express.json()); // Enable req.body JSON type
app.use(
	express.urlencoded({
		extended: true,
	})
); // Support urlencode body

// Sanitize data
app.use(mongoSanitize());


// Prevent http param pollution
app.use(hpp());

// Set static file directory
app.use(express.static('public'));

// Use helmet
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

// CORS
app.use(cors());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else {
	// create a write stream (in append mode)
	let accessLogStream = fs.createWriteStream(
		path.join(__dirname, 'access.log'),
		{
			flags: 'a',
		}
	);
	// setup the logger
	app.use(morgan('combined', { stream: accessLogStream }));
}

// Make routes
app.use('/article', articleRoutes);
app.use('/comment', commentRoutes);

// if (process.env.NODE_ENV !== 'test') {
// 	// Running server
// 	app.listen(3000, () => console.log('Server running on 3000'));
// }

mongooseConnect
	.then((res) => {
		app.listen(3000, () => console.log('Server running on 3000'));
	})
	.catch((err) => {
        console.log(err);
    });

module.exports = app;
