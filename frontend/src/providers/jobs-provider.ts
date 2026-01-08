import { ApiJob } from "../types/api-job";

const JOB_ENDPOINT = "/jobs";

export class JobsProvider {
  constructor(private endpoint: string) {}

  async getJobs(): Promise<ApiJob[]> {
    const response = await fetch(`${this.endpoint}${JOB_ENDPOINT}`);
    const data = await response.json();
    return data;
  }

  async getJobDetails(jobId: string): Promise<ApiJob> {
    const response = await fetch(`${this.endpoint}${JOB_ENDPOINT}/${jobId}`);

    if (!response.ok) {
      throw new Error(`Error fetching job details:${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
}
