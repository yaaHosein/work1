import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import { container } from "../container";
// import cors from "cors";
// import axios from "axios";


const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
const [error,setError]=useState(null)

useEffect(()=>{
  async function loadJobs(){
    const jobsService=container.JobsService;
    setLoading(true)
        const [error,jobsData]=await jobsService.getJobs()
    if (error){

    console.error("Error fetching jobs:",error);
    setError("Failed to load jobs. Please try again later.")
   } else {
    setJobs(jobsData)
   } 
   setLoading(false)
  }
  loadJobs()
},[])



  // const BACKEND_URL = "http://localhost:1100";

  // useEffect(() => {
  //   async function init() {
  //     const res = await fetch(`${BACKEND_URL}/jobs`);
  //     const data = await res.json();
  //     setJobs(data);
  //     console.log(data);
  //   }

  //   init(); 
  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl=isHome
  //     ?"/api/jobs?_limit=3"
  //     :"/api/jobs"
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.log("Error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  // const fetchJobs = async () => {
  //   const res = await axios.get("http://localhost:1100/jobs");
  //   setJobs(res.data.jobs);
  //   console.log(res.data.jobs);
  // };

  // useEffect(() => {
  //   fetchJobs();
  //   setLoading(false);
  // }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-c ols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
