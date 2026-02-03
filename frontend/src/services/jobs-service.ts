import { JobsProvider } from "../providers/jobs-provider";
import { Job } from "../types/job";

export class JobsService {
  constructor(private jobProvider: JobsProvider) {}

  async getJobs(): Promise<[boolean, Job[]]> {
    try {
      const jobs = await this.jobProvider.getJobs();
      return [false, jobs];
    } catch (error) {
      console.error("Error fetching jobs: ", error);
      return [true, []];
    }
  }
  async getJobById(id: string): Promise<[Boolean, Job]> {
    try {
      const job = await this.jobProvider.getJobById(id);
      return [false, job];
    } catch (error) {
      console.log(`Error fetching job with id $(id):`, error);
      return [true, null];
    }
  }
}
