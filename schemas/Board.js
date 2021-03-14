const mongoose = require('mongoose')
const { Schema } = mongoose

const Board= new Schema({
	title: {
		type: String,
		required: true,
	},
	writer: { type: String },
	content: { type: String },
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Board', Board)