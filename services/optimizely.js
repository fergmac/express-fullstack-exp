const axios = require('axios');
const optimizely = require('@optimizely/optimizely-sdk');

class OptimizelyService {

	constructor() {
		this.client = {};
		// this.createUserId();
		// this.getUser();
		this.getDataFile();
		this.updateDataFile();
	}
	// TODO: bring getUser() into service;
	// getUser(req, res, next) {
	// 	return function(req, res, next) {	
	// 		if (req.cookies['optimizely_user']) {
	// 		   userId = req.cookies['optimizely_user'];
	// 		   console.log('userId' + userId);
	// 		} else {
	// 		   userId = createUserId();
	// 		   console.log('createUserId ' + userId);
	// 		   res.cookie('optimizely_user', userId, { expire: new Date() + 1800000 });
	// 		}

	// 		next();
	// 	}
	// }

	// createUserId() {
	// 	return Math.random().toString(36).substring(7);
	// }

	updateDataFile() {
		this.getDataFile();
	}

	getDataFile() {
		axios.get('https://cdn.optimizely.com/datafiles/MspCQ3UTqvTiQXj4gYYQiN.json')
		.then(({ data }) => {
			this.client = optimizely.createInstance({ datafile: data, skipJSONValidation: true });
		});		
	}


}

module.exports = OptimizelyService;
