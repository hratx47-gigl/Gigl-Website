const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const { check, validationResult, body } = require("express-validator");
const ClientDashboardController = require("../controllers/ClientDashboardController");
const { Gig, UserClient, UserPerformer } = require("../database");



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

router.post("/signout", AuthController.postClientSignout);

// router.post("/addgig", [{}]);

router.get("/client", ClientDashboardController.getActiveGigs);

module.exports = router;
