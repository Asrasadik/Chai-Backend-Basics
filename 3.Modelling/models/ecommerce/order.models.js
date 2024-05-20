import mongoose from 'mongoose';

// orderItemsSchema can be added in diferent file but this schema is used 
//by only orderSchema so here it can be fine so no export required if required can be written in different file
const orderItemsSchema = mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
        },
        quantity: {
            type: Number,
            required: true
        }
    });

const orderSchema = mongoose.Schema(
	{
		orderPrice: {
			required: true,
			type: Number,
		},
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		orderItems: {
			type: [orderItemsSchema],
        },
        address: { // can make this seperate schema with state, pincode etc
            type: String,
            required: true

        },
        //this is kind of required
        //if there is spelling mistake in this then in status that value won't be updated 
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
        }
		/* below can also be done 
        orderItems: {
            type: [
            {
        prod: 
            }
            ]
        }*/
	},
	{ timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
