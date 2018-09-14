const express = require('express');
const hbs = require('handlebars');
const fs = require('fs');
const resolve = require('path').resolve;

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(resolve(process.cwd(), 'build')));

app.get('/', (req, res) => {
	res.send('Hello World!');
	fs.readFile(resolve(process.cwd(), '.build/index.html')), (err, file) => {
		if (err) {
			res.sendStatus(404);
		} else {
			res.send(file.toString());
		}
	}
});

app.listen(port, (err) => {
	if (err) {
		console.log('There was an error starting express: ', err);
	} else {
		console.log(`Express was started! Listening on port: ${port}`);
	}
})