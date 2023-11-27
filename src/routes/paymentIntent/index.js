const express = require("express");
const paymentIntent = require("../../api/paymentIntent/paymentIntent");
const router = express.Router();

router.post("/paymentIntent/:id", paymentIntent);

module.exports = router;
