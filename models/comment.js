const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const CommentSchema = new mongoose.Schema(
	{
		nickname: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
		toJSON: { getters: true },
	}
);

// Enable soft delete
CommentSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('comment', CommentSchema, 'comment');
