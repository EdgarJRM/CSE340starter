// Account routes
// Unit 4, deliver login view activity

//Needed Resources
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')

// Deliver Login Views
// Unit 4, Deliver Login Views Activity
router.get("/login", utilities.handleErrors(accountController.buildLogin));

// Deliver Registration Views
// Unit 4, Deliver Registration Views Activity
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Process Registration Data
// Unit 4, process registration activity
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
)

// Process the login attempt. Unity 4
router.post(
    "/login",
    (req, res) => {
      res.status(200).send('login process')
    }
)

module.exports = router;