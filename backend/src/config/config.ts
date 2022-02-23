import dotenv from "dotenv";

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
	useNewUrlParser: true,
	socketTimeoutMS: 3000,
	keepAlive: true,
	autoIndex: false,
	retryWrites: false,
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || "username";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "password";
const MONGO_HOST = process.env.MONGO_HOST || "localhost";

const MONGO = {
	host: MONGO_HOST,
	username: MONGO_USERNAME,
	password: MONGO_PASSWORD,
	options: MONGO_OPTIONS,
    url: process.env.MONGO_HOST || "mongodb://localhost:27017/db"
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
};

const config = {
	server: SERVER,
	mongo: MONGO,
};

export default config;
