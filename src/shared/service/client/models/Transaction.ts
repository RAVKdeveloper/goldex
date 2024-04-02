/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlatformTransactions } from './PlatformTransactions';
import type { ProjectToTransaction } from './ProjectToTransaction';
import type { TraiderTeamToTransaction } from './TraiderTeamToTransaction';
import type { TransactionArticle } from './TransactionArticle';
import type { TransactionType } from './TransactionType';
/**
 * Represents a Transaction record
 */
export type Transaction = {
  id: number;
  type: TransactionType;
  article: TransactionArticle;
  currency_amount: string;
  exchange_rate: string;
  main_currency_amount: string;
  created_at: string;
  updated_at: string;
  ProjectToTransaction?: (Array<ProjectToTransaction> | null);
  TraiderTeamToTransaction?: (Array<TraiderTeamToTransaction> | null);
  PlatformTransactions?: (Array<PlatformTransactions> | null);
};

