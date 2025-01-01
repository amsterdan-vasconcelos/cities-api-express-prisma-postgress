import { prisma } from '@/libs/prisma';
import { CreateUser } from '@/types/models';
import { passwordCrypto } from '@/utils';

type Create = (user: CreateUser) => Promise<number | Error>;

const create: Create = async (user) => {
  try {
    const hasUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (hasUser) {
      return new Error('Já existe um usuário utilizando este email.');
    }

    const hashedPassword = await passwordCrypto.hashPassword(user.password);

    const result = await prisma.user.create({
      data: { ...user, password: hashedPassword },
      select: { id: true },
    });

    return result.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Error('Erro ao cadastrar o registro');
  }
};

export { create };
