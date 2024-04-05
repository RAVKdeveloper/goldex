/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IGetResponseBase_Page_InvoiceReadForTable__ } from '../models/IGetResponseBase_Page_InvoiceReadForTable__';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoicesService {
  /**
   * Read Invoices List
   * @returns IGetResponseBase_Page_InvoiceReadForTable__ Successful Response
   * @throws ApiError
   */
  public static readInvoicesList({
    page = 1,
    size = 50,
  }: {
    page?: number,
    size?: number,
  }): CancelablePromise<IGetResponseBase_Page_InvoiceReadForTable__> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/invoices/',
      query: {
        'page': page,
        'size': size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
