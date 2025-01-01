import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { usersServices } from '@/services';
import { validation } from '@/middlewares';
import { jwt, passwordCrypto, getJsonError } from '@/utils';
import { bodySchema, type BodyProps } from '@/schemas/users/signin';

const signInValidator = validation({ body: bodySchema });

type SignIn = RequestHandler<unknown, unknown, BodyProps>;

const signIn: SignIn = async (req, res) => {
  const { email, password } = req.body;

  const result = await usersServices.getByEmail(email);

  if (result instanceof Error) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json(getJsonError('Email ou senha inválido.'));
    return;
  }

  const passwordMatched: boolean = await passwordCrypto.verifyPassword(
    password,
    result.password,
  );

  if (passwordMatched !== true) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json(getJsonError('Email ou senha inválido.'));
    return;
  }

  const accessToken = jwt.sign({ uid: result.id });
  if (accessToken === 'JWT_SECRET_NOT_FOUND') {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError('Erro ao gerar o token de acesso.'));
    return;
  }

  res.status(StatusCodes.OK).json({ accessToken });
};

export { signInValidator, signIn };
