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

router.get("/profile/username", ClientDashboardController.getUsername); //does this work, Marc?

router.post("/signout", AuthController.postClientSignout);

router.get("/performerinfo/:id", ClientDashboardController.getPerformerDetails);

router.put("/selectedperformer", ClientDashboardController.addPerformerToGig);

// router.get(
//   "/appliedperformers/:id",
//   ClientDashboardController.getAppliedPerformers
// );

router.put(
  "/deleteperformer",
  ClientDashboardController.deletePerformerFromGig
);

module.exports = router;
