/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GateWay } from './GateWay';
import type { Invoice } from './Invoice';
/**
 * Represents a InvoiceToGateWay record
 */
export type InvoiceToGateWay = {
  id: number;
  invoice?: (Invoice | null);
  gate_way?: (GateWay | null);
  created_at: string;
  updated_at: string;
  invoice_id: number;
  gate_way_id: number;
};

