/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
/**
 * Represents a PaymentUrl record
 */
export type PaymentUrl = {
  id: number;
  uuid: string;
  invoice?: (Invoice | null);
  created_at: string;
  updated_at: string;
  invoice_id: number;
};

