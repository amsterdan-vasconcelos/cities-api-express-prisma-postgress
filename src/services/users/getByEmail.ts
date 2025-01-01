import { prisma } from '@/libs/prisma';
import { User } from '@/types/models';

type GetByEmail = (email: string) => Promise<User | Error>;

const getByEmail: GetByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) return user;

    return new Error('Registro não encontrado.');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Error('Error ao consultar o registro.');
  }
};

export { getByEmail };
