/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserRole } from './UserRole';
export type UserRead = {
  id: number;
  role: UserRole;
  username: string;
  password: string;
  blocked: boolean;
  created_at: string;
  updated_at: string;
};

