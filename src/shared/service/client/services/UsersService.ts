/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IGetResponseBase_Page_UserRead__ } from '../models/IGetResponseBase_Page_UserRead__';
import type { IGetResponseBase_UserRead_ } from '../models/IGetResponseBase_UserRead_';
import type { IPostResponseBase_UserRead_ } from '../models/IPostResponseBase_UserRead_';
import type { IPutResponseBase_UserRead_ } from '../models/IPutResponseBase_UserRead_';
import type { UserCreate } from '../models/UserCreate';
import type { UserUpdate } from '../models/UserUpdate';
import type { UserUpdateAdmin } from '../models/UserUpdateAdmin';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * Read Users List
   * @returns IGetResponseBase_Page_UserRead__ Successful Response
   * @throws ApiError
   */
  public static readUsersList({
    page = 1,
    size = 50,
  }: {
    page?: number,
    size?: number,
  }): CancelablePromise<IGetResponseBase_Page_UserRead__> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/',
      query: {
        'page': page,
        'size': size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create User
   * @returns IPostResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static createUser({
    requestBody,
  }: {
    requestBody: UserCreate,
  }): CancelablePromise<IPostResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/users/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `There is already a user with same username`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get My Data
   * @returns IGetResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static getMyData(): CancelablePromise<IGetResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/me',
    });
  }
  /**
   * Update User Me
   * @returns IPutResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static updateUserMe({
    requestBody,
  }: {
    requestBody: UserUpdate,
  }): CancelablePromise<IPutResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/v1/users/me',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `There is already a user with same username`,
        404: `User not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Remove User
   * @returns IGetResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static removeUser({
    userId,
  }: {
    userId: number,
  }): CancelablePromise<IGetResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/v1/users/{user_id}',
      path: {
        'user_id': userId,
      },
      errors: {
        400: `Users can not delete themself`,
        404: `User not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get User By Id
   * @returns IGetResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static getUserById({
    userId,
  }: {
    userId: number,
  }): CancelablePromise<IGetResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/{user_id}',
      path: {
        'user_id': userId,
      },
      errors: {
        404: `User not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update User
   * @returns IPutResponseBase_UserRead_ Successful Response
   * @throws ApiError
   */
  public static updateUser({
    userId,
    requestBody,
  }: {
    userId: number,
    requestBody: UserUpdateAdmin,
  }): CancelablePromise<IPutResponseBase_UserRead_> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/v1/users/{user_id}',
      path: {
        'user_id': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `There is already a user with same username`,
        404: `User not found`,
        422: `Validation Error`,
      },
    });
  }
}
