import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '@/middlewares';
import { citiesServices } from '@/services';
import { getJsonError } from '@/utils';
import { paramsSchema, type ParamsProps } from '@/schemas/cities/deleteById';

const deleteByIdValidator = validation({ params: paramsSchema });

type DeleteById = RequestHandler<ParamsProps>;

const deleteById: DeleteById = async (req, res) => {
  const { id } = req.params;

  const result = await citiesServices.deleteById(Number(id));
  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.NO_CONTENT).send();
};

export { deleteById, deleteByIdValidator };
