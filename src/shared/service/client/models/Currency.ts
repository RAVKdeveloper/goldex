/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyType } from './CurrencyType';
import type { ExchangeRate } from './ExchangeRate';
import type { ProjectToCurrency } from './ProjectToCurrency';
import type { TraiderTeamToCurrency } from './TraiderTeamToCurrency';
/**
 * Represents a Currency record
 */
export type Currency = {
  id: number;
  type: CurrencyType;
  name: string;
  symbol: string;
  is_main_currency: boolean;
  created_at: string;
  updated_at: string;
  ExchangeRate?: (Array<ExchangeRate> | null);
  ProjectToCurrency?: (Array<ProjectToCurrency> | null);
  TraiderTeamToCurrency?: (Array<TraiderTeamToCurrency> | null);
};

