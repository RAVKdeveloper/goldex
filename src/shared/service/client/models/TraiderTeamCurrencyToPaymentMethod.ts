/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentMethod } from './PaymentMethod';
import type { TraiderTeamComissions } from './TraiderTeamComissions';
import type { TraiderTeamPaymentMethodToTraiderTeamGateWayLimit } from './TraiderTeamPaymentMethodToTraiderTeamGateWayLimit';
import type { TraiderTeamToCurrency } from './TraiderTeamToCurrency';
/**
 * Represents a TraiderTeamCurrencyToPaymentMethod record
 */
export type TraiderTeamCurrencyToPaymentMethod = {
  id: number;
  blocked: boolean;
  traider_team_currency?: (TraiderTeamToCurrency | null);
  payment_method?: (PaymentMethod | null);
  created_at: string;
  updated_at: string;
  traider_team_to_currency_id: number;
  payment_method_id: number;
  TraiderTeamComissions?: (Array<TraiderTeamComissions> | null);
  TraiderTeamPaymentMethodToTraiderTeamGateWayLimit?: (Array<TraiderTeamPaymentMethodToTraiderTeamGateWayLimit> | null);
};

