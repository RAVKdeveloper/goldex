/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IGetResponseBase_list_BalanceRead__ } from '../models/IGetResponseBase_list_BalanceRead__';
import type { ResponseStatusOk } from '../models/ResponseStatusOk';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BalancesService {
  /**
   * Get Total Balances
   * @returns IGetResponseBase_list_BalanceRead__ Successful Response
   * @throws ApiError
   */
  public static getTotalBalances(): CancelablePromise<IGetResponseBase_list_BalanceRead__> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/balances/total',
    });
  }
  /**
   * Create Add Balance
   * @returns IGetResponseBase_list_BalanceRead__ Successful Response
   * @throws ApiError
   */
  public static createAddBalance({
    summ,
  }: {
    summ: number,
  }): CancelablePromise<IGetResponseBase_list_BalanceRead__> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/balances/add/create',
      query: {
        'summ': summ,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Submit Add Balance
   * table
   * Invoice
   * Invoice.card -> card
   * Invoice.card -> card.bank_client.*name
   * Invoice.currency -> symbol
   * Invoice.payment_method -> name
   *
   * Transaction.TransactionArticle INCOME
   * @returns ResponseStatusOk Successful Response
   * @throws ApiError
   */
  public static submitAddBalance(): CancelablePromise<ResponseStatusOk> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/balances/add/submit',
    });
  }
  /**
   * Sub Total Balance
   * @returns ResponseStatusOk Successful Response
   * @throws ApiError
   */
  public static subTotalBalance({
    summ,
    wallet,
  }: {
    summ: number,
    wallet: string,
  }): CancelablePromise<ResponseStatusOk> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/balances/sub',
      query: {
        'summ': summ,
        'wallet': wallet,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
