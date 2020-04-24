const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const PerformerController = require('../controllers/PerformerController');
const { check, validationResult, body } = require('express-validator');


router.post('/login', [
    body("email").isEmail(),
    body("password").isLength({min: 5}),
], AuthController.postPerformerLogin);

router.post('/signup', [
    body("email").isEmail(),
    body("username").isLength({min: 4}),
    body("password").isLength({min: 5}),

], AuthController.postPerformerSignup);

// router.get('/gigs', PerformerController.getPerformerGigs);
router.get('/gigs', PerformerController.getAllGigs);
router.get('/gigs/accepted', PerformerController.getPerformerAcceptedGigs);
router.get('/gigs/pending', PerformerController.getPerformerPendingGigs);
router.get('/gigs/available', PerformerController.getPerformerAvailableGigs);
router.post('/gigs/apply', PerformerController.postApplyToGig);


// router.post("/signout", AuthController.postPerformerSignout);

router.get('/profile', PerformerController.getPerformerProfileInfo );

router.put('/profile', PerformerController.putPerformerProfileInfo );

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});



router.post("/signout", AuthController.postPerformerSignout);

module.exports = router;