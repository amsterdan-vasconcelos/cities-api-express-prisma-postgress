import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { citiesServices } from '@/services';
import { getJsonError } from '@/utils';
import { validation } from '@/middlewares';
import { querySchema, type QueryProps } from '@/schemas/cities/getAll';

const getAllValidator = validation({ query: querySchema });

type GetAll = RequestHandler<unknown, unknown, unknown, QueryProps>;

const getAll: GetAll = async (req, res) => {
  const { page = 1, per_page = 10, search, id } = req.query;

  const result = await citiesServices.getAll({
    page: Number(page),
    per_page: Number(per_page),
    search,
    id: Number(id),
  });
  const count = await citiesServices.count(search);

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
