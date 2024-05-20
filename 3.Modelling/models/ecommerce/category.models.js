import mongoose from 'mongoose';

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        categoryId: {
            type: Number,
            required: true
        }


}, { timestamps: true });

export const Category = mongoose.model('Category', categorySchema);
