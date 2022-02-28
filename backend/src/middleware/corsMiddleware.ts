import cors from "cors";

const whitelist = ["http://localhost:3000"];
const corsOptions = {
	origin: (origin: string | undefined, callback: any) => {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

const corsHandler = cors(corsOptions);

export { corsHandler };
