import { DatabaseErrorType } from "./../types";
import config from "../config/config";
import mongoose from "mongoose";
import logging from "../utils/logging";

const DB = {
	getConnection: async ( url: string, options: object ): Promise<typeof mongoose | DatabaseErrorType> => {
		try {
			const db = await mongoose.connect(url, options);
			logging.info(config.server.hostname, `Mongo Connected ${db.connection.host}`);
			return db;
		} catch (error: any) {
			logging.error(config.server.hostname, error.message, error);
			return {
				errorCode: 99,
				message: error.message,
			};
		}
	},
};

export { DB };
