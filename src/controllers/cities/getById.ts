import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '@/middlewares';
import { getJsonError } from '@/utils';
import { citiesServices } from '@/services';
import { paramsSchema, type ParamsProps } from '@/schemas/cities/getById';

const getByIdValidator = validation({ params: paramsSchema });

type GetById = RequestHandler<Partial<ParamsProps>>;

const getById: GetById = async (req, res) => {
  const { id } = req.params;

  const result = await citiesServices.getById(Number(id));
  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.OK).json(result);
};

export { getById, getByIdValidator };
