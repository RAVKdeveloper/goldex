/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GateWay } from './GateWay';
import type { Project } from './Project';
import type { ProjectPaymentMethodToProjectGateWayLimit } from './ProjectPaymentMethodToProjectGateWayLimit';
/**
 * Represents a ProjectToGateWay record
 */
export type ProjectToGateWay = {
  id: number;
  blocked: boolean;
  gate_way?: (GateWay | null);
  project?: (Project | null);
  created_at: string;
  updated_at: string;
  gate_way_id: number;
  project_id: number;
  ProjectPaymentMethodToProjectGateWayLimit?: (Array<ProjectPaymentMethodToProjectGateWayLimit> | null);
};

