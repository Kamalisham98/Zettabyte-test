const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const ArticleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
        article: {
			type: String,
			required: true,
		},
		reference: {
			type: String,
			required: false,
		},
		uploadDate: {
			type: Date,
			required: false,
		},
		writer: {
            type: String,
			required: true,
		},
        comment:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref:"comment"
            }
        ]
        // poster: {
        // 	type: String,
        // 	default: null,
        // 	required: true,
        // 	get: getImage, //link
        // },

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
ArticleSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('article', ArticleSchema, 'article');
