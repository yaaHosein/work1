import { JobsProvider } from "./providers/jobs-provider";
import { JobsService } from "./services/jobs-service";

const API_ENDPOINT = "http://localhost:3000/api";

export const container = {
  jobsService: new JobsService(new JobsProvider(API_ENDPOINT)),
};
