
const mongoose = require('mongoose')

const mongo = () => {
	const connect = async() => {
		const mongoURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
		await mongoose.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		}, (err) => {
			if(err) console.log(err)
			else console.log("몽고디비 시작")
		})
	}	
	connect();

	mongoose.connection.on('error', (err) => { throw new Error(err); })
	mongoose.connection.on('disconnected', connect)

	require('./Board')
}

module.exports = mongo

