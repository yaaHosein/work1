// import cors from "cors";                                                                                                                                                                
import express from "express";

var app = express();
console.log("hellow");
 


app.get("/jobs",(req,res)=>{
  res.json([
    {id:1,name:"item 1"},
    {id:2,name:"item 2"},
    {id:3,name:"item 3"}
  ])
})


app.get("/jobs/:id", (req, res) => {
  const jobId = req.params.id
  console.log((jobId));
  res.json({id:jobId, name:`Item ${jobId}`})
  
})
  

app.listen(1100, () => {
  console.log("server is running on port 1100");
});



// import { JobController } from "./controller/job-controller.js";
// // import { v7 } from "uuid";

// // import { Job } from "./types/job.js";

// app.use(cors());
// app.use(express.json())

// const JobsRouter=express.Router();
// new JobController(JobsRouter)

// // app.use(`/api${JobController.path}`,JobsRouter)
// app.use(`/${JobController.path}`,JobsRouter)


// // app.get("/api/jobs", (req, res) => {
// //   res.json(jobs);
// // });

// type Job={
//   id:string ;
//   name:string
// }

// const jobs:Job[]=[
//   {id:"1", name: "Softawar "},
//     {id:"2", name: "Softawar "},
//       {id:"3", name: "Softawar "},
//         {id:"4", name: "Softawar "}
// ]


//   const job = jobs.find((j) => j.id === jobId);
//   if (job) {
//     res.json(job);
//   } else {
//     res.status(404).json({message:"job not found"});
//   }
// });

// // const jobs: Job[] = []



// // app.post("/api/jobs", express.json(), (req, res) => {
// //     const newJob:Job = req.body;
// //     newJob.id = v7(); // simple Id generation
// //     jobs.push(newJob);
// //     res.status(201).json(newJob);
// // });




// // const corsOptions = {
// //   origin: ["http://localhost:5008"],
// // };

// // app.use(cors(corsOptions));

