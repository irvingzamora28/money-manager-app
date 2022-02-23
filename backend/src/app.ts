import express from "express";
import { json } from "body-parser";
import { productRouter } from "./routes/expenseRoutes";
import { errorHandler } from "./middleware/errorMiddleware";
import { DB } from "./database/database";
import config from "./config/config";

DB.getConnection(config.mongo.url, config.mongo.options);

const app = express();
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(productRouter);
app.use(errorHandler)

export default app;
