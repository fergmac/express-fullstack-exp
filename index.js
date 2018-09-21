const express = require('express');
const fs = require('fs');
const resolve = require('path').resolve;
const cookieParser = require('cookie-parser');
const OptimizelyService = require('./services/optimizely');
const port = process.env.PORT || 3000;
const app = express();
const optimizely = new OptimizelyService();

const setOptimizelyUser = (req, res, next) => {
	return function(req, res, next) {	
		// TODO: move to service as getUser();
		if (req.cookies['optimizely_user']) {
		   userId = req.cookies['optimizely_user'];
		   console.log('userId' + userId);
		} else {
		   userId = createUserId();
		   console.log('createUserId ' + userId);
		   res.cookie('optimizely_user', userId, { expire: new Date() + 1800000 });
		}

		next();
	}
}

// Middleware
app.use(cookieParser());
app.use(setOptimizelyUser());

let userId;

// Create ID
const createUserId = () => {
	return Math.random().toString(36).substring(7);
}

app.get('/', (req, res) => {

	const variation = optimizely.client.activate('express-playground', userId);

	res.send(variation);
});

app.get('/update_data_file', () => {
	optimizely.client.updateDataFile();
});

app.listen(port, (err) => {
	if (err) {
		console.log('There was an error starting express: ', err);
	} else {
		console.log(`Express was started! Listening on port: ${port}`);
	}
})