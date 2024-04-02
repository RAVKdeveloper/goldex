/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceToGateWay } from './InvoiceToGateWay';
import type { PaymentData } from './PaymentData';
import type { PaymentMethod } from './PaymentMethod';
import type { PaymentUrl } from './PaymentUrl';
import type { Project } from './Project';
import type { TraiderTeam } from './TraiderTeam';
export type InvoiceReadWithRelations = {
  id: number;
  currency_amount: string;
  exchange_rate: string;
  main_currency_amount: string;
  payment_method?: (PaymentMethod | null);
  project?: (Project | null);
  traider_team?: (TraiderTeam | null);
  created_at: string;
  updated_at: string;
  payment_method_id: number;
  project_id: number;
  traider_team_id: number;
  PaymentData?: (Array<PaymentData> | null);
  PaymentUrl?: (Array<PaymentUrl> | null);
  InvoiceToGateWay?: (Array<InvoiceToGateWay> | null);
};

