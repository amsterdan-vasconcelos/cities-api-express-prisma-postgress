import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Users - LOGIN', () => {
  beforeAll(async () => {
    const response = await testServer.post('/signup').send({
      name: 'amsterdan',
      email: 'amsterdan@email.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof response.body).toEqual('number');
  });

  it('Fazer login.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'amsterdan@email.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toHaveProperty('accessToken');
  });
  it('Tenta fazer login sem passar um email.', async () => {
    const response = await testServer.post('/signin').send({
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.email');
  });
  it('Tenta fazer login sem passar uma senha.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'amsterdan@email.com',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.password');
  });
  it('Tenta fazer login passando um email com sintaxe inválida.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'amsterdanemail.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.email');
  });
  it('Tenta fazer login passando uma senha com menos de 8 caracteres.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'amsterdan@email.com',
      password: '1234567',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.password');
  });
  it('Tenta fazer login passando um email inválido.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'jessica@email.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(response.body).toHaveProperty('errors.default');
  });
  it('Tenta fazer login passando uma senha inválida.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'amsterdan@email.com',
      password: '12345679',
    });

    expect(response.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(response.body).toHaveProperty('errors.default');
  });
  it('Tenta fazer login passando um email e uma senha inválidos.', async () => {
    const response = await testServer.post('/signin').send({
      email: 'jessica@email.com',
      password: '12345679',
    });

    expect(response.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(response.body).toHaveProperty('errors.default');
  });
});
