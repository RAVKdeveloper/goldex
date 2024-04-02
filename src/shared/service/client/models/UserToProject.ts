/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Project } from './Project';
import type { User } from './User';
import type { UserRole } from './UserRole';
/**
 * Represents a UserToProject record
 */
export type UserToProject = {
  id: number;
  user?: (User | null);
  project?: (Project | null);
  user_role: UserRole;
  blocked: boolean;
  created_at: string;
  updated_at: string;
  user_id: number;
  project_id: number;
};

