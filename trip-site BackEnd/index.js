import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import "./src/conn.js";
import tripRoutes from "./src/routes/Routes.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const PORT = process.env.PORT || 3003;
app.use(cors());
app.use(express.json());

app.use("/trips", tripRoutes);

app.listen(PORT, () => {
  console.log("App is listening at", PORT);
});
