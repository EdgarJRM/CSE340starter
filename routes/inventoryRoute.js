// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// Route to build inventory by Single view
router.get("/detail/:inventoryId", invController.buildBySingleViewId);

// Route to build error view
router.get("/error/", invController.errorBoom);

// Route to build management view
router.get("/", invController.vehicleManagement);

// Route to add-classification view
router.get("/addclassification/", invController.addclassification);

// Route to Add New Vehicle view
router.get("/addinventory/", invController.addNewVehicle);

module.exports = router;