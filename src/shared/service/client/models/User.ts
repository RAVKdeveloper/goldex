/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserRole } from './UserRole';
import type { UserToProject } from './UserToProject';
import type { UserToTraiderTeam } from './UserToTraiderTeam';
/**
 * Represents a User record
 */
export type User = {
  id: number;
  role: UserRole;
  username: string;
  password: string;
  blocked: boolean;
  created_at: string;
  updated_at: string;
  UserToTraiderTeam?: (Array<UserToTraiderTeam> | null);
  UserToProject?: (Array<UserToProject> | null);
};

