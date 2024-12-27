import express from "express";
import Routes from './routes/index.js'
import * as config from "./config.js";
import cors from "cors";
import './connection/mongodbConnect.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use(Routes)

app.listen(config.configs.local.port, () => {
  console.log("react-node demo Server Running on Port :" + config.configs.local.port);
});
