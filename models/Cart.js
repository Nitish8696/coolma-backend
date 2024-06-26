const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");


const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        productId: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type:Number,
                    default : 1,
                },
            },
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model("Cart", CartSchema)