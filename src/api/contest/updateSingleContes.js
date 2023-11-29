const Contest = require("../../models/contest");

const updateSingleContest = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      image,
      banner,
      attempt_count,
      description,
      deadline,
      tags,
      prizeMoney,
      entryFee,
    } = req.body;
    console.log(name, image, banner);
    console.log(id);
    const result = await Contest.findByIdAndUpdate(
      id,
      {
        name: name,
        image: image,
        banner: banner,
        attempt_count: attempt_count,
        description: description,
        deadline: deadline,
        tags: tags,
        prizeMoney: prizeMoney,
        entryFee: entryFee,
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateSingleContest;
