/**---------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *---------------------------------------------------------------------------------------------*/

import { Request } from 'express';
import { ErrorResponse } from '../types/errorResponse';

const GET_AUTHORIZATION_CODE_ERROR = 'Fail to get the authorization code from the request header';

// Get an AAD token passed through request header
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAADTokenViaRequest = (req: Request): any => {
  // Extract the aadToken exhcanged by OBO from the authorization header
  const authHeader = req.headers.authorization;
  if (authHeader) {
    return authHeader.split(' ')[1];
  } else {
    throw new Error(GET_AUTHORIZATION_CODE_ERROR);
  }
};

// Create an error response
export const createErrorResponse = (code: number, message: string, stack_trace?: string): ErrorResponse => {
  return {
    code: code,
    message: message,
    stack_trace: stack_trace
  };
};