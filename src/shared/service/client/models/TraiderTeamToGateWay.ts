/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GateWay } from './GateWay';
import type { TraiderTeam } from './TraiderTeam';
import type { TraiderTeamPaymentMethodToTraiderTeamGateWayLimit } from './TraiderTeamPaymentMethodToTraiderTeamGateWayLimit';
/**
 * Represents a TraiderTeamToGateWay record
 */
export type TraiderTeamToGateWay = {
  id: number;
  blocked: boolean;
  gate_way?: (GateWay | null);
  traider_team?: (TraiderTeam | null);
  created_at: string;
  updated_at: string;
  gate_way_id: number;
  traider_team_id: number;
  TraiderTeamPaymentMethodToTraiderTeamGateWayLimit?: (Array<TraiderTeamPaymentMethodToTraiderTeamGateWayLimit> | null);
};

