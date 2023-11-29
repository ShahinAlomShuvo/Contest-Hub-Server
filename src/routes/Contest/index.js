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
  setContestWinner,
  contestCount,
} = require("../../api/contest");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

router.get("/contest", getAllContest);
router.get("/contest/count", contestCount);

router.get("/contest/:id", getSingleContest);
router.get("/popularContest", popularContest);
router.get("/creatorContest/:email", verifyToken, getCreatorContest);
router.get("/searchContest", searchContest);
router.get("/totalContest", totalContest);
router.post("/contest", addContest);
router.patch("/contest/:id", updateContest);
router.patch("/contest/winner/:id", setContestWinner);
router.patch("/confirmContest/:id", confirmContest);
router.delete("/contest/:id", deleteContest);

module.exports = router;
