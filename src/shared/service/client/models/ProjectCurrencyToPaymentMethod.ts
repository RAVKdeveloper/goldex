/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentMethod } from './PaymentMethod';
import type { ProjectComissions } from './ProjectComissions';
import type { ProjectPaymentMethodToProjectGateWayLimit } from './ProjectPaymentMethodToProjectGateWayLimit';
import type { ProjectToCurrency } from './ProjectToCurrency';
/**
 * Represents a ProjectCurrencyToPaymentMethod record
 */
export type ProjectCurrencyToPaymentMethod = {
  id: number;
  blocked: boolean;
  project_currency?: (ProjectToCurrency | null);
  payment_method?: (PaymentMethod | null);
  created_at: string;
  updated_at: string;
  project_to_currency_id: number;
  payment_method_id: number;
  ProjectComissions?: (Array<ProjectComissions> | null);
  ProjectPaymentMethodToProjectGateWayLimit?: (Array<ProjectPaymentMethodToProjectGateWayLimit> | null);
};

