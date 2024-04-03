/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
import type { PaymentDirection } from './PaymentDirection';
import type { PaymentToCurrency } from './PaymentToCurrency';
import type { ProjectCurrencyToPaymentMethod } from './ProjectCurrencyToPaymentMethod';
import type { TraiderTeamCurrencyToPaymentMethod } from './TraiderTeamCurrencyToPaymentMethod';
/**
 * Represents a PaymentMethod record
 */
export type PaymentMethod = {
  id: number;
  direction: PaymentDirection;
  name: string;
  created_at: string;
  updated_at: string;
  ProjectCurrencyToPaymentMethod?: (Array<ProjectCurrencyToPaymentMethod> | null);
  TraiderTeamCurrencyToPaymentMethod?: (Array<TraiderTeamCurrencyToPaymentMethod> | null);
  Invoice?: (Array<Invoice> | null);
  PaymentToCurrency?: (Array<PaymentToCurrency> | null);
};

