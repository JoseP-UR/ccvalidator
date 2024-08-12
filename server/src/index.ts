import express from "express";
import { config as initEnv } from "dotenv";
import apiRouter from "./api/routes";

initEnv();

const port = process.env.APP_PORT || 3000;
const devClientPort = process.env.DEV_CLIENT_PORT || 3001;
const appEnv = process.env.APP_ENV || "development";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

if (appEnv === "production") {
  app.use(express.static('public'))
}

app.get("/", (req, res) => {
  res.redirect(`http://localhost:${devClientPort}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
