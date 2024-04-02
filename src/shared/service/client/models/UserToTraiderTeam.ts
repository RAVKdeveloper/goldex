/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TraiderTeam } from './TraiderTeam';
import type { User } from './User';
import type { UserRole } from './UserRole';
/**
 * Represents a UserToTraiderTeam record
 */
export type UserToTraiderTeam = {
  id: number;
  user?: (User | null);
  team?: (TraiderTeam | null);
  user_role: UserRole;
  blocked: boolean;
  created_at: string;
  updated_at: string;
  user_id: number;
  traider_team_id: number;
};

