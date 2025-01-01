import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { getJsonError } from '@/utils';
import { validation } from '@/middlewares';
import { peopleServices } from '@/services';
import { paramsSchema, type ParamsProps } from '@/schemas/people/deleteById';

const deleteByIdValidator = validation({ params: paramsSchema });

type DeleteById = RequestHandler<Partial<ParamsProps>>;

const deleteById: DeleteById = async (req, res) => {
  const { id } = req.params;

  const result = await peopleServices.deleteById(Number(id));
  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.NO_CONTENT).send();
};

export { deleteById, deleteByIdValidator };
