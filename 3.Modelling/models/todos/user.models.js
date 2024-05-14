import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({}); // this will create schema which accepts object of data points which defines fields of data

export const User = mongoose.model('User', userSchema);
