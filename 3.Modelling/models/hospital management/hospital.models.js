import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		adressLine1: {
			type: String,
			required: true,
		},
		adressLine2: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		pinCode: {
			type: String,
			required: true,
		},
		scecializedIn: [{
			type: String
		}],
	},
	{ timeStamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
