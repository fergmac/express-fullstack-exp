const OptimizelyService = require('../services/optimizely');
const optimizely = new OptimizelyService();

module.exports = (router) => {
	router.get('/', (req, res) => {

		// TODO: Moved to services/optimizely as getVariation();
		// const variation = optimizely.client.activate('express-playground', req.userId);

		// res.send(variation);
		
		optimizely.client.getVariation();
	});

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});
}