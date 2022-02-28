
const SERVER_HOST = process.env.SERVER_HOST || "http://localhost";
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	host: SERVER_HOST,
	port: SERVER_PORT,
};

const config = {
	server: SERVER,
};

export default config;
