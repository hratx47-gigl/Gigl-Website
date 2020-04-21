const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const PerformerController = require('../controllers/PerformerController');


router.post('/login', AuthController.postPerformerLogin);

router.post('/signup', AuthController.postPerformerSignup);

router.get('/gigs', PerformerController.getPerformerGigs);

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});
module.exports = router;