import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { getJsonError, jwt } from '@/utils/index';

const ensureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(StatusCodes.UNAUTHORIZED).json(getJsonError('Não autenticado!'));
    return;
  }

  const [type, token] = authorization.split(' ');

  const isValideType = type === 'Bearer';
  if (!isValideType) {
    res.status(StatusCodes.UNAUTHORIZED).json(getJsonError('Não autenticado!'));
    return;
  }

  const jwtData = jwt.verify(token);

  if (jwtData === 'JWT_SECRET_NOT_FOUND') {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(getJsonError('Erro ao verificar o token!'));
    return;
  }

  if (jwtData === 'INVALID_TOKEN') {
    res.status(StatusCodes.UNAUTHORIZED).json(getJsonError('Não autenticado!'));
    return;
  }

  req.headers.uid = jwtData.uid.toString();

  next();
};

export { ensureAuthenticated };
