const cookieParser = require('cookie-parser');

// Create ID
const createUserId = () => {
	return Math.random().toString(36).substring(7);
}

module.exports = () => {
	return function(req, res, next) {	
		if (req.cookies['optimizely_user']) {
		   req.userId = req.cookies['optimizely_user'];
		   console.log('userId ' + req.userId);
		} else {
		   req.userId = createUserId();
		   console.log('createUserId ' + req.userId);
		   res.cookie('optimizely_user', userId, { expire: new Date() + 1800000 });
		}
		next();
	}
}