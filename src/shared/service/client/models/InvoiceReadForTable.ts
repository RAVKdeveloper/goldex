/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceStatus } from './InvoiceStatus';
export type InvoiceReadForTable = {
  id: number;
  created_at: string;
  updated_at: string;
  status: InvoiceStatus;
  currency_amount: string;
  exchange_rate: string;
  main_currency_amount: string;
  expiration_time: string;
  bank_card_id: number;
  currency_id: number;
  payment_method_id: number;
  card_number?: (string | null);
  card_client_name?: (string | null);
  card_client_last_name?: (string | null);
  card_client_patronymic_name?: (string | null);
  currency_symbol: string;
  payment_method_name: string;
};

