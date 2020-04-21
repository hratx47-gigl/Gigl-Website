const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const { check, validationResult, body } = require("express-validator");
const ClientDashboardController = require("../controllers/ClientDashboardController");

router.get("/", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  AuthController.postClientLogin
);

router.post(
  "/signup",
  [
    body("email").isEmail(),
    body("username").isLength({ min: 4 }),
    body("password").isLength({ min: 5 }),
  ],
  AuthController.postClientSignup
);

router.get("/client", ClientDashboardController.getActiveGigs);

module.exports = router;
