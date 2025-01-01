import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '@/middlewares';
import { getJsonError } from '@/utils';
import { citiesServices } from '@/services';
import {
  paramsSchema,
  type ParamsProps,
  bodySchema,
  type BodyProps,
} from '@/schemas/cities/updateById';

const updateByIdValidator = validation({
  params: paramsSchema,
  body: bodySchema,
});

type UpdateById = RequestHandler<Partial<ParamsProps>, unknown, BodyProps>;

const updateById: UpdateById = async (req, res) => {
  const { id } = req.params;

  const result = await citiesServices.updateById({
    id: Number(id),
    city: req.body,
  });
  if (result instanceof Error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.NO_CONTENT).send();
};

export { updateById, updateByIdValidator };
