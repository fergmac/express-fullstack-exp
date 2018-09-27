const OptimizelyService = require('../services/optimizely');
const optimizely = new OptimizelyService();

module.exports = (router) => {
	
	router.get('/', (req, res) => {

		const variation = req.optimizely.client.activate('express-playground', req.userId);

		res.send(variation);
		
	});


	// router.get('/products', (req, res) => {

	// });

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});
}