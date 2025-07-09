import express from "express";
var app = express();
console.log("gooooooooooooooooo");

app.get("/",(req,res)=>{
    res.send("Hi my love  ")
})

// import { v7 } from "uuid";

// const jobs = [
//     {
//         id: v7(),
//         title: "Software Engineer",
//         company: "tec crop",
//     },
//     {
//         id: v7(),
//         title: "teacher",
//         company: "Bangor",
//     },
//     {
//         id: v7(),
//         title: "Dr",
//         company: "matrix",
//     },
// ];
// app.get("/api/jobs", (req, res) => {
//     res.json(jobs);
// });
// app.get("/api/jobs/:id", (req, res) => {
//     const jobId = req.params.id;
//     const job = jobs.find((j) => j.id === jobId);
//     if (job) {
//         res.json(job);
//     }
//     else {
//         res.status(404).json({ message: "job not found" });
//     }
// });
// app.post("/api/jobs", express.json(), (req, res) => {
//     const newJob = req.body;
//     newJob.id = v7(); // simple Id generation
//     jobs.push(newJob);
//     res.status(201).json(newJob);
// });
app.listen(1100, () => {
    console.log("server is running on port 1100");
});
