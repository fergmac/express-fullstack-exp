const axios = require('axios');
const optimizely = require('@optimizely/optimizely-sdk');

class OptimizelyService {

	constructor() {
		this.client = {};
		this.datafile = null;

		this.getDataFile()
		.then(() => this.getClient());
	}


	updateDataFile() {
		this.getDataFile();
	}

	getClient() {
		this.client = optimizely.createInstance({ datafile: this.datafile, skipJSONValidation: true });
	}

	async getDataFile() {
		const res = await axios.get('https://cdn.optimizely.com/datafiles/MspCQ3UTqvTiQXj4gYYQiN.json');
		this.datafile = res.data;
		
		return Promise.resolve();
	}

	static initialize() {

		const optimizely = new OptimizelyService();

		return (req, res, next) => {

			req.optimizely = optimizely;

			// TODO: return an optimizely object with && set user ID 
			next();

		}
	}
}

module.exports = OptimizelyService;

