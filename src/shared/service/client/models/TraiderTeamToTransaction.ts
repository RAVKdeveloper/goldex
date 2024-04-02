/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TraiderTeam } from './TraiderTeam';
import type { Transaction } from './Transaction';
/**
 * Represents a TraiderTeamToTransaction record
 */
export type TraiderTeamToTransaction = {
  id: number;
  transaction?: (Transaction | null);
  traider_team?: (TraiderTeam | null);
  created_at: string;
  updated_at: string;
  transaction_id: number;
  traider_team_id: number;
};

