const axios = require('axios');
const optimizely = require('@optimizely/optimizely-sdk');

class OptimizelyService {

	constructor() {
		this.client = {};
		this.getUser();
		this.getDataFile();
		this.updateDataFile();
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

	// TODO: bring getUser() into service;
	getUser() {
		
	}

}

module.exports = OptimizelyService;
