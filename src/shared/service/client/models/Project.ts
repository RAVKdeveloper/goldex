/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
import type { ProjectToCurrency } from './ProjectToCurrency';
import type { ProjectToGateWay } from './ProjectToGateWay';
import type { ProjectToTransaction } from './ProjectToTransaction';
import type { UserToProject } from './UserToProject';
/**
 * Represents a Project record
 */
export type Project = {
  id: number;
  name: string;
  blocked: boolean;
  api_key: string;
  created_at: string;
  updated_at: string;
  UserToProject?: (Array<UserToProject> | null);
  ProjectToCurrency?: (Array<ProjectToCurrency> | null);
  ProjectToTransaction?: (Array<ProjectToTransaction> | null);
  Invoice?: (Array<Invoice> | null);
  ProjectToGateWay?: (Array<ProjectToGateWay> | null);
};

