const stripe = require("stripe")(process.env.SERVER_STRIPE_KEY);

const calculateOrderAmount = (items) => {
    // You may want to calculate the total amount based on items
    return 2000; // For now, returning a static amount of $20.00
};

const StripePaymentMiddleware = async (req, res) => {
    try {
        const { items } = req.body;
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            currency: "usd",
            payment_method_types: ["card"], // Specify the payment method types
            description: "Payment", // Optional description
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
};

module.exports = StripePaymentMiddleware;
