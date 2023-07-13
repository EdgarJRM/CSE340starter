// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// Route to build inventory by classification view
router.get("/detail/:inventoryId", invController.buildBySingleViewId);

// Route to build inventory by classification view
router.get("/error/", invController.errorBoom);

module.exports = router;