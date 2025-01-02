import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Users - REGISTER', () => {
  it('Criar registro.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'Amsterdan',
      email: 'amsterdan@email.com',
      password: '1234567878',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof response.body).toEqual('number');
  });
  it('Criar registro duas vezes.', async () => {
    const resFirst = await testServer.post('/signup').send({
      name: 'Amsterdan',
      email: 'amsterdan2@email.com',
      password: '12345678',
    });

    expect(resFirst.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof resFirst.body).toEqual('number');

    const resSecond = await testServer.post('/signup').send({
      name: 'Jessica',
      email: 'jessica@email.com',
      password: '12345678',
    });

    expect(resSecond.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof resSecond.body).toEqual('number');
  });
  it('Tenta criar usuário com email dublicado.', async () => {
    const resFirst = await testServer.post('/signup').send({
      name: 'Amsterdan',
      email: 'amsterdan3@email.com',
      password: '12345678',
    });

    expect(resFirst.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof resFirst.body).toEqual('number');

    const resSecond = await testServer.post('/signup').send({
      name: 'Jessica',
      email: 'amsterdan3@email.com',
      password: '87654321',
    });

    expect(resSecond.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(resSecond.body).toHaveProperty('errors.default');
  });
  it('Tenta criar registro sem mandar a propriedade name.', async () => {
    const response = await testServer.post('/signup').send({
      email: 'amsterdan@email.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.name');
  });
  it('Tenta criar registro sem mandar a propriedade email.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'amsterdan',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.email');
  });
  it('Tenta criar registro sem mandar a propriedade password.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'amsterdan',
      email: 'amsterdan@email.com',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.password');
  });
  it('Tenta criar registro passando um name com menos de 2 caracteres.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'a',
      email: 'amsterdanjg@email.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.name');
  });
  it('Tenta criar registro passando um password com menos de 8 caracteres.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'amsterdan',
      email: 'asterdan@email.com',
      password: '1234567',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.password');
  });
  it('Tenta criar registro passando um email com sintaxe inválida.', async () => {
    const response = await testServer.post('/signup').send({
      name: 'amsterdan',
      email: 'amsterdanemail.com',
      password: '12345678',
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.email');
  });
});
