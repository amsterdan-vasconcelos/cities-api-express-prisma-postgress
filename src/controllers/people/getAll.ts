import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { peopleServices } from '@/services';
import { getJsonError } from '@/utils';
import { validation } from '@/middlewares';
import { querySchema, type QueryProps } from '@/schemas/people/getAll';

const getAllValidator = validation({ query: querySchema });

type GetAll = RequestHandler<unknown, unknown, unknown, QueryProps>;

const getAll: GetAll = async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;

  const result = await peopleServices.getAll({
    page: Number(page),
    limit: Number(limit),
    search,
  });

  const count = await peopleServices.count(search);

  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }
  if (count instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(count.message));
    return;
  }

  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', count);

  res.status(StatusCodes.OK).json(result);
};

export { getAll, getAllValidator };
