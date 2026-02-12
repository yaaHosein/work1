import { ApiJob } from "../types/api-job";

const JOB_ENDPOINT: String = "/jobs";

export class JobsProvider {
  constructor(private endpoint: string) {}

  async getJobs(): Promise<ApiJob[]> {
    const response: Response = await fetch(`${this.endpoint}${JOB_ENDPOINT}`);
  
    
    const data: any = await response.json();
    return data;
  }

  async getJobById(jobId: string): Promise<ApiJob> {
    const response = await fetch(`${this.endpoint}${JOB_ENDPOINT}/${jobId}`);

    if (!response.ok) {
      throw new Error(`Error fetching job details:${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }

  async deleteJob(jobId: string): Promise<void> {
    const response = await fetch(`${this.endpoint}${JOB_ENDPOINT}/${jobId}`, {
      method: "DELETE",
    });
// was my status code between 200 and 209?
    if (!response.ok) {
      throw new Error(`Error deleting job details:${response.statusText}`);
    }
  }

  async createJob(addJob):  Promise<ApiJob[]> {
    const response = await fetch (`${this.endpoint}/${addJob}`,{
      method: "POST",
    });
// was my status code between 200 and 209?
    if (!response.ok) {
      throw new Error(`Error creating job details:${response.statusText}`);
    }
     const data = await response.json();
    return data;
  }
  
  async editJob(job:any):  Promise<void> {
    const response = await fetch (`${this.endpoint}${JOB_ENDPOINT}/${job.id}`,{
      method: "PUT",
           headers: {
        'Content-Type': 'application/json',
      },
          body: JSON.stringify(job)
    });
// was my status code between 200 and 209?
    if (!response.ok) {
      throw new Error(`Error editing job details:${response.statusText}`);
    }
  }
}
