const express = require('express');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const app = express();
const getUser = require('./middleware/get-user.js');
const router = express.Router();


// Middleware
app.use(cookieParser());
app.use(getUser());

// app.get('/', (req, res) => {

// 	// TODO: Moved to services/optimizely as getVariation();
// 	// const variation = optimizely.client.activate('express-playground', req.userId);

// 	// res.send(variation);

// 	optimizely.client.getVariation();
// });

// TODO: refactor to bring in routes from routes folder 
require('./routes')(router);
app.use(router);

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