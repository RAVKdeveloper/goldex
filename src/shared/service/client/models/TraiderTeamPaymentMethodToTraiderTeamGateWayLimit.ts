/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TraiderTeamCurrencyToPaymentMethod } from './TraiderTeamCurrencyToPaymentMethod';
import type { TraiderTeamToGateWay } from './TraiderTeamToGateWay';
/**
 * Represents a TraiderTeamPaymentMethodToTraiderTeamGateWayLimit record
 */
export type TraiderTeamPaymentMethodToTraiderTeamGateWayLimit = {
  id: number;
  blocked: boolean;
  limit: string;
  traider_team_gate_way?: (TraiderTeamToGateWay | null);
  traider_team_payment_method?: (TraiderTeamCurrencyToPaymentMethod | null);
  created_at: string;
  updated_at: string;
  traider_team_to_gate_way_id: number;
  traiderTeamCurrencyToPaymentMethodId: number;
};

