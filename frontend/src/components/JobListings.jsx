import { useEffect, useState } from "react";
import { container } from "../container";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      const jobsService = container.jobsService;
      setLoading(true);
      const [error, jobsData] = await jobsService.getJobs();
      if (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs. Please try again later.");
      } else {
        setJobs(jobsData);
      }
      setLoading(false);
    }

    loadJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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
