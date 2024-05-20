import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
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
		salary: {
			type: String,
			required: true,
		},
		Qualification: {
			type: String,
			required: true,
		},
		experienceInYears: {
			type: Number,
			default: 0,
		},
		worksInHospitals: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Hospital',
			},
		],
	},
	{ timeStamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);