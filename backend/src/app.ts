import express from "express";
import { json } from "body-parser";
import { productRouter } from "./routes/expenseRoutes";

const app = express();
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(productRouter);

export default app;
