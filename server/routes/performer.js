const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});

router.post('/login', AuthController.postPerformerLogin);

router.post('/signup', AuthController.postPerformerSignup);

module.exports = router;