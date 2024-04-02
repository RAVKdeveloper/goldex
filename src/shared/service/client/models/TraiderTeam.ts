/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
import type { TraiderTeamToCurrency } from './TraiderTeamToCurrency';
import type { TraiderTeamToGateWay } from './TraiderTeamToGateWay';
import type { TraiderTeamToTransaction } from './TraiderTeamToTransaction';
import type { UserToTraiderTeam } from './UserToTraiderTeam';
/**
 * Represents a TraiderTeam record
 */
export type TraiderTeam = {
  id: number;
  name: string;
  blocked: boolean;
  created_at: string;
  updated_at: string;
  UserToTraiderTeam?: (Array<UserToTraiderTeam> | null);
  TraiderTeamToCurrency?: (Array<TraiderTeamToCurrency> | null);
  TraiderTeamToTransaction?: (Array<TraiderTeamToTransaction> | null);
  Invoice?: (Array<Invoice> | null);
  TraiderTeamToGateWay?: (Array<TraiderTeamToGateWay> | null);
};

