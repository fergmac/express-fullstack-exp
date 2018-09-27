const OptimizelyService = require('../services/optimizely');
const optimizely = new OptimizelyService();
const hbs = require('hbs');

module.exports = (router) => {
	
	router.get('/', (req, res) => {

		const variation = req.optimizely.client.activate('express-playground', req.userId);

		res.send(variation);

		// if (variation === 'control') {
		//   // execute code for control
		// } else if (variation === 'varA') {
		//   // execute code for varA
		// } else if (variation === 'varB') {
		//   // execute code for varB
		// } else {
		//   // execute default code
		// }

		// Track a conversion event for the provided user with attributes
		// const goals = req.optimizely.client.track(CLICK_ADD_TO_CART, req.userId, attributes);

		// res.send(goals);
		
	});

	router.get('/cart', (req, res) => {
		    res.render('cart.hbs', {
		        pageTitle: 'Cart Page',
		        welcomeMessage: 'Welcome to my Cart'
		    });
	});

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});
}