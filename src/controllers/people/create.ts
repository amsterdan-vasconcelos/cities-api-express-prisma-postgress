import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { peopleServices } from '@/services';
import { validation } from '@/middlewares';
import { getJsonError } from '@/utils';
import { bodySchema, type BodyProps } from '@/schemas/people/create';

const createValidator = validation({ body: bodySchema });

type Create = RequestHandler<unknown, unknown, BodyProps>;

const create: Create = async (req, res) => {
  const result = await peopleServices.create(req.body);

  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.CREATED).json(result);
};

export { create, createValidator };
