const OptimizelyService = require('../services/optimizely');
// const optimizely = new OptimizelyService();
const hbs = require('hbs');

module.exports = (router) => {
	
	router.get('/', (req, res) => {
		const variation = req.optimizely.activate('express-playground');
		
		res.send(variation);
	});

	router.get('/cart', (req, res) => {
		    res.render('cart.ejs', {
		        pageTitle: 'Cart Page',
		        welcomeMessage: 'Welcome to my Cart',
		        btnPrompt: 'Add To Cart'
		    });

		// Track a conversion event for the provided user with attributes
		req.optimizely.track('CLICK_ADD_TO_CART');
	});

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});
}