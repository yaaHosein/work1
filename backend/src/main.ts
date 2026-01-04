import express from "express";
import cors from "cors";
import { JobController } from "./controller/job-controller.js";

var app = express();
app.use(cors());
app.use(express.json());

const JobsRouter = express.Router();
new JobController(JobsRouter);

app.use(`/api${JobController.path}`, JobsRouter);

app.listen(1100, () => {
  console.log("server is running on port 1100");
});


// import express from "express";
// const app = express();
// app.use(logger);
// app.get('/', (req, res) => {
//   res.send("Home Page");
// });
// app.get('/jobs', (req, res) => {
//   console.log("jobs page");

//   res.send("Jobs Page");
// });

// function logger(req, res, next) {
//   console.log("Log");
//   next();
// }

// app.listen(1100, (): void => {
//   console.log("server is running on port 1100");
// });





