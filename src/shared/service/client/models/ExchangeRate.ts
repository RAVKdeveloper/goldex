/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
/**
 * Represents a ExchangeRate record
 */
export type ExchangeRate = {
  id: number;
  value: string;
  currency?: (Currency | null);
  created_at: string;
  updated_at: string;
  currency_id: number;
};

