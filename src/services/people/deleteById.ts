import { prisma } from '@/libs/prisma';

type DeleteById = (id: number) => Promise<void | Error>;

const deleteById: DeleteById = async (id) => {
  try {
    await prisma.person.delete({ where: { id } });
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Error ao apagar o registro.');
  }
};

export { deleteById };
