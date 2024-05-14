import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
	},
	{ timestamps: true }
); // this will create schema which accepts object of data points which defines fields of data

export const User = mongoose.model('User', userSchema);
