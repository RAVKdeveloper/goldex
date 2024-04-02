/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IGetResponseBase_list_BalanceRead__ } from '../models/IGetResponseBase_list_BalanceRead__';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BalancesService {
  /**
   * Get Own Balance
   * @returns IGetResponseBase_list_BalanceRead__ Successful Response
   * @throws ApiError
   */
  public static getOwnBalance(): CancelablePromise<IGetResponseBase_list_BalanceRead__> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/balances/',
    });
  }
}
