/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { Project } from './Project';
import type { ProjectCurrencyToPaymentMethod } from './ProjectCurrencyToPaymentMethod';
/**
 * Represents a ProjectToCurrency record
 */
export type ProjectToCurrency = {
  id: number;
  blocked: boolean;
  project?: (Project | null);
  currency?: (Currency | null);
  created_at: string;
  updated_at: string;
  projectId: number;
  currencyId: number;
  ProjectCurrencyToPaymentMethod?: (Array<ProjectCurrencyToPaymentMethod> | null);
};

