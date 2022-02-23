import express from "express";
import { json } from "body-parser";
import { productRouter } from "./routes/expenseRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

const app = express();
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(productRouter);
app.use(errorHandler)

export default app;
