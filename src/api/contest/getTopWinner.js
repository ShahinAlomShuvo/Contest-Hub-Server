const Contest = require("../../models/contest");

const getTopWinner = async (req, res) => {
  try {
    const result = await Contest.aggregate([
      {
        $group: {
          _id: "$winnerEmail",
          count: {
            $count: {},
          },
        },
      },

      {
        $limit: 9,
      },

      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "email",
          as: "users",
        },
      },
      {
        $addFields: {
          user: {
            $arrayElemAt: ["$users", 0],
          },
        },
      },
      {
        $project: {
          userId: "$user._id",
          name: "$user.name",
          role: "$user.role",
          email: "$user.email",
          image: "$user.image",
          count: true,
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getTopWinner;
