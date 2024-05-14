import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		subTodos: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'SubTodos',
			},
		],
	},
	{ timestamps: true }
);

export const SubTodos = mongoose.model('SubTodo', subTodoSchema);
