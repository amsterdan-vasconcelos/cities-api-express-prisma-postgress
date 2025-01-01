import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { getJsonError } from '@/utils';
import { usersServices } from '@/services';
import { validation } from '@/middlewares';
import { bodySchema, type BodyProps } from '@/schemas/users/signUp';

type SignUp = RequestHandler<unknown, unknown, BodyProps>;

const signUpValidator = validation({ body: bodySchema });

const signUp: SignUp = async (req, res) => {
  const result = await usersServices.create(req.body);

  if (result instanceof Error) {
    if (result.message === 'Já existe um usuário utilizando este email.') {
      res.status(StatusCodes.BAD_REQUEST).json(getJsonError(result.message));
      return;
    }

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError(result.message));
    return;
  }

  res.status(StatusCodes.CREATED).json(result);
};

export { signUpValidator, signUp };
