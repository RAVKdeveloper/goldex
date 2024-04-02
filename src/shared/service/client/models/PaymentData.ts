/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
/**
 * Represents a PaymentData record
 */
export type PaymentData = {
  id: number;
  payment_data: any;
  invoice?: (Invoice | null);
  created_at: string;
  updated_at: string;
  invoice_id: number;
};

