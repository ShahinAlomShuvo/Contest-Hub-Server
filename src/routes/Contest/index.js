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
  updateSingleContest,
  getWinnerList,
  getTopWinner,
  getContestCreatorList,
  singleUserWinningData,
} = require("../../api/contest");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

router.get("/contest", getAllContest);
router.get("/contest/count", contestCount);

router.get("/contest/winners", getWinnerList);
router.get("/contest/top/winners", getTopWinner);
router.get("/contest/top/creator", getContestCreatorList);
router.get("/single-user-winning-data/:email", singleUserWinningData);

router.get("/contest/:id", getSingleContest);
router.get("/popularContest", popularContest);
router.get("/creatorContest/:email", verifyToken, getCreatorContest);
router.get("/searchContest", searchContest);
router.get("/totalContest", totalContest);
router.post("/contest", verifyToken, addContest);
router.patch("/contest/:id", verifyToken, updateContest);
router.patch("/contest/update/:id", verifyToken, updateSingleContest);
router.patch("/contest/winner/:id/:email", verifyToken, setContestWinner);
router.patch("/confirmContest/:id", verifyToken, confirmContest);
router.delete("/contest/:id", verifyToken, deleteContest);

module.exports = router;
