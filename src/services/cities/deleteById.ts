import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prisma } from '@/libs/prisma';

type DeleteById = (id: number) => Promise<void | Error>;

const deleteById: DeleteById = async (id) => {
  try {
    await prisma.city.delete({ where: { id } });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return new Error('Jéssica Linda');
      }
    }

    console.log('Provider - error:', error);
    return new Error('Error ao apagar o registro.');
  }
};

export { deleteById };
