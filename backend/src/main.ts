import cors from "cors";
import express from "express";

import { JobController } from "./controllers/job-controller.js";

var app = express();
app.use(cors());
app.use(express.json());

const jobsRouter = express.Router();
new JobController(jobsRouter);

app.use(`/api${JobController.path}`, jobsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
