/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Project } from './Project';
import type { Transaction } from './Transaction';
/**
 * Represents a ProjectToTransaction record
 */
export type ProjectToTransaction = {
  id: number;
  transaction?: (Transaction | null);
  project?: (Project | null);
  created_at: string;
  updated_at: string;
  transaction_id: number;
  project_id: number;
};

