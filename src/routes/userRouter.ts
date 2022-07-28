/**---------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *---------------------------------------------------------------------------------------------*/

import express from 'express';
import { createACSUser, deleteACSUser, getACSUser } from '../controllers/userController';
import { checkJwt } from '../utils/utils';

export const userRouter = () => {
  // Initialize router
  const router = express.Router();

  // Token routes
  // 1. Get an ACS user
  router.get('/', checkJwt, getACSUser);
  // 2. Create an ACS user
  router.post('/', checkJwt, createACSUser);
  // 3. Delete an ACS user
  router.delete('/', checkJwt, deleteACSUser);

  return router;
};
