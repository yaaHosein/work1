import cors from "cors";
import express from "express";

import { JobController } from "./controller/job-controller.js";

var app = express();
app.use(cors());
app.use(express.json());

const JobsRouter = express.Router();
new JobController(JobsRouter);

app.use(`/${JobController.path}`, JobsRouter);

app.listen(1100, () => {
  console.log("server is running on port 1100");
});
