/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TraiderTeamCurrencyToPaymentMethod } from './TraiderTeamCurrencyToPaymentMethod';
/**
 * Represents a TraiderTeamComissions record
 */
export type TraiderTeamComissions = {
  id: number;
  blocked: boolean;
  comission_value: string;
  less_than_or_equal: string;
  greater_than_or_equal: string;
  traider_team_payment_method?: (TraiderTeamCurrencyToPaymentMethod | null);
  created_at: string;
  updated_at: string;
  traider_team_currency_to_payment_method_id: number;
};

