import { JobsProvider } from "./providers/jobs-provider";
import { JobsService } from "./services/jobs-service";

const API_URL = "http://localhost:1100/api";

export const container = {
  JobsService: new JobsService(new JobsProvider(API_URL)),
};
