/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { PaymentMethod } from './PaymentMethod';
/**
 * Represents a PaymentToCurrency record
 */
export type PaymentToCurrency = {
  id: number;
  blocked: boolean;
  payment_method?: (PaymentMethod | null);
  currency?: (Currency | null);
  created_at: string;
  updated_at: string;
  paymentMethodId: number;
  currencyId: number;
};

