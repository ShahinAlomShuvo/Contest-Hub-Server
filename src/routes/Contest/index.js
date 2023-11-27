const express = require("express");
const {
  addContest,
  getAllContest,
  getSingleContest,
  popularContest,
  getCreatorContest,
  searchContest,
} = require("../../api/contest");
const router = express.Router();

router.post("/contest", addContest);
router.get("/contest", getAllContest);
router.get("/contest/:id", getSingleContest);
router.get("/popularContest", popularContest);
router.get("/contest/:email", getCreatorContest);
router.get("/searchContest", searchContest);

module.exports = router;
