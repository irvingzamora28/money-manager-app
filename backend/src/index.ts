import app from "./app";
import dotenv from "dotenv"
import logging from "./utils/logging";
import config from "./config/config";

dotenv.config()

const port = process.env.PORT || 5000

app.listen(port, () => {
    logging.info(config.server.hostname, `Server is listening on port ${port}`);
})