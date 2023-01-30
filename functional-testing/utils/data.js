import dotenv from 'dotenv';
dotenv.config();

module.exports = {
	credentials: {
		userName: process.env.USERNAME,
		password: process.env.PASSWORD
	}
};