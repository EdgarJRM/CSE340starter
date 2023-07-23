const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory by single view
 * ************************** */
invCont.buildBySingleViewId = async function (req, res, next) {
  const inv_id = req.params.inventoryId
  const data = await invModel.getInventoryByInvId(inv_id)
  const grid = await utilities.buildSingleViewGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].inv_year + ' ' + data[0].inv_make + ' ' + data[0].inv_model
  res.render("./inventory/singleview", {
    title: className,
    nav,
    grid,
  })
}

/* ***************************
 *  Build Vehicle Management view
 * ************************** */
invCont.vehicleManagement = async function (req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/management", {
    title: "Vehicle Management",
    nav,
  })
}

/* ***************************
 *  Build Add Classification view
 * ************************** */
invCont.addclassification = async function (req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification", {
    title: "Add New Classification",
    nav,
    errors: null,
  })
}

/* ***************************
 *  Build Add New Vehicle view
 * ************************** */
invCont.addNewVehicle = async function (req, res, next) {
  let nav = await utilities.getNav()
  let grid = await utilities.getClassificationId()
  res.render("./inventory/add-inventory", {
    title: "Add New Vehicle",
    nav,
    grid,
    errors: null,
  })
}

/* ***************************
 *  Build error Link
 * ************************** */
invCont.errorBoom = async function (req, res, next) {
  const grid = ""
  // inventory/singleview need the nav => error
  res.render("./inventory/singleview", {
    title: "HI",
    grid,
  })
}


/* ****************************************
*  Process Add Classification
* *************************************** */
invCont.addNewClassification = async function (req, res, next) {
  const {classification_name} = req.body

  const regResult = await invModel.registerClassificationName(
    classification_name,
  )

  let nav = await utilities.getNav()

  if (regResult) {
    req.flash(
      "notice",
      `The ${classification_name} classification was successfully added.`
    )
    res.status(201).render("./inventory/management", {
      title: "Vehicle Management",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the registration failed.")
    res.status(501).render("./inventory/add-classification", {
      title: "Add New Classification",
      nav,
    })
  }
}


/* ****************************************
*  Process Add New Vehicle
* *************************************** */
invCont.addVehicle = async function(req, res) {
  let nav = await utilities.getNav()

  const {classification_id, inv_make, inv_model, inv_description, inv_image, inv_thumbnail, 
    inv_price, inv_year, inv_miles, inv_color} = req.body

  const regResult = await invModel.registerNewVehicle(
    classification_id, 
    inv_make, 
    inv_model, 
    inv_description, 
    inv_image, 
    inv_thumbnail, 
    inv_price, 
    inv_year, 
    inv_miles, 
    inv_color
  )

  if (regResult) {
    req.flash(
      "notice",
      `The ${inv_make} can was successfully added.`
    )
    res.status(201).render("./inventory/management", {
      title: "Vehicle Management",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the registration failed.")
    res.status(501).render("./inventory/add-inventory", {
      title: "Add New Classification",
      nav,
    })
  }
}


module.exports = invCont