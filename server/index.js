const express = require('express');
const cookieParser = require('cookie-parser');
const OptimizelyService = require('./services/optimizely');
const port = process.env.PORT || 5000;
const app = express();
// const getUser = require('./middleware/get-user.js');
const router = express.Router();

// HBS setup
const path = require('path');
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'hbs');

// Middleware
app.use(cookieParser());
// app.use(getUser());
app.use(OptimizelyService.initialize());

// Routes
require('./routes/index.js')(router);
app.use(router);

app.listen(port, (err) => {
	if (err) {
		console.log('There was an error starting express: ', err);
	} else {
		console.log(`Express was started! Listening on port: ${port}`);
	}
})