/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { TraiderTeam } from './TraiderTeam';
import type { TraiderTeamCurrencyToPaymentMethod } from './TraiderTeamCurrencyToPaymentMethod';
/**
 * Represents a TraiderTeamToCurrency record
 */
export type TraiderTeamToCurrency = {
  id: number;
  blocked: boolean;
  traider_team?: (TraiderTeam | null);
  currency?: (Currency | null);
  created_at: string;
  updated_at: string;
  traider_team_id: number;
  currency_id: number;
  TraiderTeamCurrencyToPaymentMethod?: (Array<TraiderTeamCurrencyToPaymentMethod> | null);
};

