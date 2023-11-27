const express = require("express");
const {
  addContest,
  getAllContest,
  getSingleContest,
  popularContest,
  getCreatorContest,
  searchContest,
  updateContest,
  totalContest,
  confirmContest,
  deleteContest,
} = require("../../api/contest");

const router = express.Router();

router.get("/contest", getAllContest);
router.get("/contest/:id", getSingleContest);
router.get("/popularContest", popularContest);
router.get("/creatorContest/:email", getCreatorContest);
router.get("/searchContest", searchContest);
router.get("/totalContest", totalContest);
router.post("/contest", addContest);
router.patch("/contest/:id", updateContest);
router.patch("/confirmContest/:id", confirmContest);
router.delete("/confirmDelete/:id", deleteContest);

module.exports = router;
