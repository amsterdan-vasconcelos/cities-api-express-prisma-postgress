import supertest from 'supertest';
import { StatusCodes } from 'http-status-codes';

import app from '@/app';

let accessToken = '';

const generateToken = async () => {
  const resRegister = await testServer.post('/signup').send({
    name: 'Amsterdan',
    email: 'super-unico-email@email.com',
    password: '12345678',
  });

  expect(resRegister.statusCode).toEqual(StatusCodes.CREATED);
  expect(typeof resRegister.body).toEqual('number');

  const resLogin = await testServer.post('/signin').send({
    email: 'super-unico-email@email.com',
    password: '12345678',
  });

  expect(resLogin.statusCode).toEqual(StatusCodes.OK);
  expect(resLogin.body).toHaveProperty('accessToken');

  accessToken = resLogin.body.accessToken;
};

beforeAll(async () => {
  await generateToken();
});

const testServer = supertest(app);

export { testServer, accessToken };
