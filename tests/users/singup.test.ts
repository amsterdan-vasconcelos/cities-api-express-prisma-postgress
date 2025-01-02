import { testServer } from '../jest.setup';

describe('Testando', () => {
  it('Create User', async () => {
    const result = await testServer.post('/signup').send({
      name: 'Juliana',
      email: 'juliana@email.com',
      password: '12345678',
    });

    expect(result.body).toEqual(1);
  });
});
