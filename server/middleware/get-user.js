import uuidv4 from 'uuid/v4';

// Create ID
const createUserId = () => {
	return uuidv4();
}

module.exports = () => {
	return function(req, res, next) {	
		if (req.cookies['optimizely_user']) {
			req.userId = req.cookies['optimizely_user'];
			console.log('userId ' + req.userId);
		} else {
			req.userId = createUserId();
			console.log('createUserId ' + req.userId);
			res.cookie('optimizely_user', req.userId, { expire: new Date() + 1800000 });
		}
		next();
	}
}