import { Router, Request, Response } from "express";
import { Job } from "../types/job.js";
import { v7 } from "uuid";

const jobs: Job[] = [
  {
    id: "0197fd96-7a50-74d6-94bb-c4a5b0b8d515",
    title: "Senior React Developer",
    type: "Full-Time",
    description:
      "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    location: "Boston, MA",
    salary: "$70K - $80K",
    company: {
      name: "NewTek Solutions",
      description:
        "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      contactEmail: "contact@teksolutions.com",
      contactPhone: "555-555-5555",
    },
  },
  {
    id: "0197fd96-7a52-77a5-ac8f-8b594a058268",
    title: "Front-End Engineer (React & Redux)",
    type: "Full-Time",
    location: "Miami, FL",
    description:
      "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
    salary: "$70K - $80K",
    company: {
      name: "Veneer Solutions",
      description:
        "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
      contactEmail: "contact@loremipsum.com",
      contactPhone: "555-555-5555",
    },
  },
  {
    id: "0197fd96-7a52-77a5-ac8f-8d660a1c9b8e",
    title: "Full Stack Reac",
    type: "Full-Time",
    location: "Atlanta,",
    description:
      "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
    salary: "$90K - $100K",
    company: {
      name: "Browning Technologies",
      description:
        "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
      contactEmail: "contact@consecteturadipisicing.com",
      contactPhone: "555-555-5555",
    },
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
      : response.status(404).json({ message: "job not found" });
  }

  createJob(request: Request, response: Response) {
    const newJob: Job = request.body;
    newJob.id = v7();
    console.log("creating new job with ID", newJob);

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
    const updateJob: Job = request.body;
    updateJob.id = jobId;
    jobs[jobIndex] = updateJob;
    response.json(updateJob);

    console.log("updating job with id ", jobId);
    console.log("updated job data ", updateJob);
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
