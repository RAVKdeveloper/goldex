/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GatewayType } from './GatewayType';
import type { InvoiceToGateWay } from './InvoiceToGateWay';
import type { ProjectToGateWay } from './ProjectToGateWay';
import type { TraiderTeamToGateWay } from './TraiderTeamToGateWay';
/**
 * Represents a GateWay record
 */
export type GateWay = {
  id: number;
  name: string;
  type: GatewayType;
  created_at: string;
  updated_at: string;
  TraiderTeamToGateWay?: (Array<TraiderTeamToGateWay> | null);
  ProjectToGateWay?: (Array<ProjectToGateWay> | null);
  InvoiceToGateWay?: (Array<InvoiceToGateWay> | null);
};

