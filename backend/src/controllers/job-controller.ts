import { Request, Response, Router } from "express";
import { v7 } from "uuid";
import { Job } from "../types/job.js";

const jobs: Job[] = [
  {
    id: "0197c05e-6145-7705-802f-df5efe75c6ea",
    title: "Software Engineer",
    company: "Tech Corp",
    description: "Develop and maintain software applications.",
  },
  {
    id: "0197c05e-6145-7705-802f-e0024f3680cf",
    title: "Data Scientist",
    company: "Data Inc",
    description: "Analyze and interpret complex data sets.",
  },
  {
    id: "0197c05e-6145-7705-802f-e5e6aca7ff67",
    title: "Product Manager",
    company: "Business Solutions",
    description: "Oversee product development and strategy.",
  },
  {
    id: "0197c05e-6145-7705-802f-fb8d1a2c3b4d",
    title: "UX Designer",
    company: "Creative Agency",
    description: "Design user-friendly interfaces and experiences.",
  },
];

export class JobController {
  public static readonly path = "/jobs";

  constructor(router: Router) {
    router.get("/", this.getJobs);
    router.get("/:id", this.getJobById);
    router.post("/", this.createJob);
    router.put("/:id", this.updateJob);
    router.delete("/:id", this.deleteJob);
  }

  getJobs(_request: Request, response: Response) {
    response.json(jobs);
  }

  getJobById(request: Request, response: Response) {
    const jobId = request.params.id;
    const job = jobs.find((j) => j.id === jobId);
    job
      ? response.json(job)
      : response.status(404).json({ message: "Job not found" });
  }

  createJob(request: Request, response: Response) {
    const newJob: Job = request.body;
    newJob.id = v7();

    jobs.push(newJob);
    response.status(201).json(newJob);
  }

  updateJob(request: Request, response: Response) {
    const jobId = request.params.id;
    const jobIndex = jobs.findIndex((j) => j.id === jobId);

    if (jobIndex === -1) {
      response.status(404).json({ message: "Job not found" });
      return;
    }
    const updatedJob: Job = request.body;

    updatedJob.id = jobId;
    jobs[jobIndex] = updatedJob;
    response.json(updatedJob);
  }

  deleteJob(request: Request, response: Response) {
    const jobId = request.params.id;
    const jobIndex = jobs.findIndex((j) => j.id === jobId);
    if (jobIndex === -1) {
      response.status(404).json({ message: "Job not found" });
      return;
    }
    jobs.splice(jobIndex, 1);
    response.status(204).send();
  }
}
