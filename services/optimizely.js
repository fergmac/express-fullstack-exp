const axios = require('axios');
const optimizely = require('@optimizely/optimizely-sdk');

class OptimizelyService {

	constructor() {
		this.client = {};
		this.getDataFile();
		this.updateDataFile();
		// this.getVariation();
	}

	updateDataFile() {
		this.getDataFile();
	}

	getDataFile() {
		axios.get('https://cdn.optimizely.com/datafiles/MspCQ3UTqvTiQXj4gYYQiN.json')
		.then(({ data }) => {
			this.client = optimizely.createInstance({ datafile: data, skipJSONValidation: true });
		});		
	}

	// getVariation() {
	// 	return (req, res) => {

	// 		const variation = optimizely.client.activate('express-playground', req.userId);

	// 		res.send(variation);
	// 	}
	// }
}

module.exports = OptimizelyService;

