const express = require('express');
const fs = require('fs');
const resolve = require('path').resolve;
const cookieParser = require('cookie-parser');
const OptimizelyService = require('./services/optimizely');
const port = process.env.PORT || 3000;
const app = express();
const optimizely = new OptimizelyService();
const getUser = require('./middleware/get-user.js');
const router = express.Router();

// Middleware
app.use(cookieParser());
app.use(getUser());

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