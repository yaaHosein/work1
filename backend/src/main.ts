import cors from "cors";                                                                                                                                                                
import express from "express";
import { JobController } from "./controller/job-controller.js";
// import { v7 } from "uuid";

// import { Job } from "./types/job.js";

var app = express();
app.use(cors());
app.use(express.json())

const JobsRouter=express.Router();
new JobController(JobsRouter)

app.use(`/api${JobController.path}`,JobsRouter)


// app.get("/api/jobs", (req, res) => {
//   res.json(jobs);
// });

// app.get("/api/jobs/:id", (req, res) => {
//   const jobId = req.params.id
//   const job = jobs.find((j) => j.id === jobId);
//   if (job) {
//     res.json(job);
//   } else {
//     res.status(404).json({message:"job not found"});
//   }
// });

// const jobs: Job[] = []



// app.post("/api/jobs", express.json(), (req, res) => {
//     const newJob:Job = req.body;
//     newJob.id = v7(); // simple Id generation
//     jobs.push(newJob);
//     res.status(201).json(newJob);
// });




// const corsOptions = {
//   origin: ["http://localhost:5008"],
// };

// app.use(cors(corsOptions));


app.listen(1100, () => {
  console.log("server is running on port 1100");
});
