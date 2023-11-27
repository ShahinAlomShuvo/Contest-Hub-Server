const express = require("express");
const {
  addContest,
  getAllContest,
  getSingleContest,
  popularContest,
  getCreatorContest,
  searchContest,
  updateContest,
} = require("../../api/contest");
const router = express.Router();

router.get("/contest", getAllContest);
router.get("/contest/:id", getSingleContest);
router.get("/popularContest", popularContest);
router.get("/creatorContest/:email", getCreatorContest);
router.get("/searchContest", searchContest);
router.post("/contest", addContest);
router.patch("/contest/:id", updateContest);

module.exports = router;
