const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const { check, validationResult, body } = require('express-validator');

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});

router.post('/login', [
    body("email").isEmail(),
    body("password").isLength({min: 5}),
], AuthController.postClientLogin);

router.post('/signup', [
    body("email").isEmail(),
    body("username").isLength({min: 4}),
    body("password").isLength({min: 5}),

], AuthController.postClientSignup);

module.exports = router;