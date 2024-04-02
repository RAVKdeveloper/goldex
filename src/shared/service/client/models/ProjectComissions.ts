/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectCurrencyToPaymentMethod } from './ProjectCurrencyToPaymentMethod';
/**
 * Represents a ProjectComissions record
 */
export type ProjectComissions = {
  id: number;
  blocked: boolean;
  comission_value: string;
  less_than_or_equal: string;
  greater_or_equal: string;
  project_payment_method?: (ProjectCurrencyToPaymentMethod | null);
  created_at: string;
  updated_at: string;
  project_currency_to_payment_method_id: number;
};

