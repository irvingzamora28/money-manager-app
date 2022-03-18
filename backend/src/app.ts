import express from "express";
import { json } from "body-parser";
import { productRouter } from "./routes/expenseRoutes";
import { userRouter } from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorMiddleware";
import { DB } from "./database/database";
import config from "./config/config";
import { corsHandler } from "./middleware/corsMiddleware";
import { categoryRouter } from "./routes/categoryRoutes";

DB.getConnection(config.mongo.url, config.mongo.options);

const app = express();
app.use(corsHandler);
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(productRouter);
app.use(userRouter);
app.use(categoryRouter)
app.use(errorHandler);

export default app;
