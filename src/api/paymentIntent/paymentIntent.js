const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Contest = require("../../models/contest");

const paymentIntent = async (req, res) => {
  try {
    const { id } = req.params;
    const contest = await Contest.findById(id);

    const paymentIntent = await Stripe.paymentIntents.create({
      amount: contest.entryFee * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      ...contest.toObject(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = paymentIntent;
