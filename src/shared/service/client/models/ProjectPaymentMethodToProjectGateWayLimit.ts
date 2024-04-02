/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectCurrencyToPaymentMethod } from './ProjectCurrencyToPaymentMethod';
import type { ProjectToGateWay } from './ProjectToGateWay';
/**
 * Represents a ProjectPaymentMethodToProjectGateWayLimit record
 */
export type ProjectPaymentMethodToProjectGateWayLimit = {
  id: number;
  blocked: boolean;
  limit: string;
  project_gate_way?: (ProjectToGateWay | null);
  project_payment_method?: (ProjectCurrencyToPaymentMethod | null);
  created_at: string;
  updated_at: string;
  projectToGateWayId: number;
  projectCurrencyToPaymentMethodId: number;
};

