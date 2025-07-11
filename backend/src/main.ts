import express from "express";
import cors from "cors";
import { v7 } from "uuid";

import { Job } from "./types/job.js";
var app = express();

const corsOptions = {
  origin: ["http://localhost:5008"],
};

app.use(cors(corsOptions));

const jobs: Job[] = [
  {
    id: v7(),
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
    id: v7(),
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
    id: v7(),
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
  {
    id: v7(),
    title: "React Native Developer",
    type: "Full-Time",
    description:
      "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
    location: "Portland, OR",
    salary: "$100K - $110K",
    company: {
      name: "Port Solutions INC",
      description:
        "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
      contactEmail: "contact@ipsumlorem.com",
      contactPhone: "555-555-5555",
    },
  },
];

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

// app.get("/jobs/:id", (req, res) => {
//   const jobId = req.params.id
//   const job = jobs.find((j) => j.id === jobId);
//   if (job) {
//     res.json(job);
//   } else {
//     res.status(404).json({message:"job not found"});
//   }
// });

// app.post("jobs", express.json(), (req, res) => {
//     const newJob:Job = req.body;
//     newJob.id = v7(); // simple Id generation
//     jobs.push(newJob);
//     res.status(201).json(newJob);
// });

app.listen(1100, () => {
  console.log("server is running on port 1100");
});
