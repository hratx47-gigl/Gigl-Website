const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
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

module.exports = router;