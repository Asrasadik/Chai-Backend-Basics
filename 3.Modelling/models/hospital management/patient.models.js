import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		diagnosedWith: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		bloopGroup: {
			type: String,
			required: true,
		},
		Gender: {
			type: String,
			enum: ['M', 'F', 'O'],
			required: true,
		},
		admittedIn: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Hospital',
		},
	},
	{ timeStamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
