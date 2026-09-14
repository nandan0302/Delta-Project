const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {validateReview,isloggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Review
// Post - Route
router.post("/" , isloggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete - Reviews
router.delete("/:reviewId",isReviewAuthor, wrapAsync(reviewController.destoryReview));

module.exports = router;