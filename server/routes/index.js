import OptimizelyService from '../services/optimizely';
const optimizely = new OptimizelyService();
const hbs = require('hbs');

module.exports = (router) => {
	
	router.get('/', (req, res) => {
		debugger;
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
	});

	router.get('/cart', (req, res) => {
		debugger;
		    res.render('cart.ejs', {
		        pageTitle: 'Cart Page',
		        welcomeMessage: 'Welcome to my Cart',
		        btnPrompt: 'Add To Cart'
		    });

		// Track a conversion event for the provided user with attributes
		const eventKey = 'CLICK_ADD_TO_CART';
		const attributes = {
				DEVICE: 'desktop',
			};

		req.optimizely.client.track('CLICK_ADD_TO_CART', req.userId, {});
	});

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});
}