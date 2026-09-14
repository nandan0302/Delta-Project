const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isloggedIn, isOwner , validateListing} = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer  = require('multer');
const  { storage } = require('../cloudConfig.js');
const { isValidObjectId } = require("mongoose");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(listingsController.index))
.post(isloggedIn, 
    validateListing,
    upload.single('listing[image]'), 
    wrapAsync(listingsController.createListing)
);


//  New route
router.get("/new", isloggedIn, listingsController.renderNewForm);

// Search Route
router.get("/search", wrapAsync(listingsController.searchListings));

router.route("/:id")
.get(wrapAsync(listingsController.showListing))
.put(isloggedIn, isOwner, 
    upload.single('listing[image]'), 
    validateListing,
    wrapAsync(listingsController.updateListing))
.delete(isloggedIn, isOwner, wrapAsync(listingsController.destroyListing));


// Edit Route
router.get("/:id/edit", isloggedIn, isOwner, wrapAsync(listingsController.renderEditForm));




module.exports = router;