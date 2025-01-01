import { prisma } from '@/libs/prisma';

type Count = (search?: string) => Promise<number | Error>;

const count: Count = async (search) => {
  try {
    return await prisma.city.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao consultar a quantidade total de registros.');
  }
};

export { count };
