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

router.post("/addgig", ClientDashboardController.postGig);

router.get("/gigs", ClientDashboardController.getActiveGigs);

router.post("/signout", AuthController.postClientSignout);

module.exports = router;
