/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login } from '../models/Body_login';
import type { Body_login_access_token } from '../models/Body_login_access_token';
import type { TokenRead } from '../models/TokenRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoginService {
  /**
   * Login
   * Login for all users
   * @returns TokenRead Successful Response
   * @throws ApiError
   */
  public static login({
    requestBody,
  }: {
    requestBody: Body_login,
  }): CancelablePromise<TokenRead> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/login/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Username or Password incorrect`,
        403: `The user doesn't have enough privileges`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Login Access Token
   * OAuth2 compatible token login, get an access token for future requests
   * @returns TokenRead Successful Response
   * @throws ApiError
   */
  public static loginAccessToken({
    formData,
  }: {
    formData: Body_login_access_token,
  }): CancelablePromise<TokenRead> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/login/access-token',
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        400: `Username or Password incorrect`,
        403: `The user doesn't have enough privileges`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Route Logout And Remove Cookie
   * @returns any Successful Response
   * @throws ApiError
   */
  public static routeLogoutAndRemoveCookie(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/login/logout',
    });
  }
}
