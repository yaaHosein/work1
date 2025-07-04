import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import axios from "axios";
<<<<<<< HEAD
=======

>>>>>>> e54868f7fd20356e3b2429fef470a7e11651c093

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(true);

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

  const fetchApI= async ()=>{
<<<<<<< HEAD
    const response= await axios.get("http://localhost:1100/api/jobs") 
=======
    const response= await axios.get("http://localhost:8080/jobs") 
>>>>>>> e54868f7fd20356e3b2429fef470a7e11651c093
    setJobs(response.data.jobs);
    console.log(response.data.jobs);
  }

  useEffect(()=>{
    fetchApI();
  },[])
  return (

  
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        
          {loading ? (
            <Spinner loading={loading}/>
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




