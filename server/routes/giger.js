const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});

router.post('/login', AuthController.postGigerLogin);

router.post('/signup', AuthController.postGigerSignup);

module.exports = router;