import { prisma } from '@/libs/prisma';
import { City } from '@/types/models';

type GetById = (id: number) => Promise<City | Error>;

const getById: GetById = async (id) => {
  try {
    const city = await prisma.city.findUnique({ where: { id } });

    if (city) return city;

    return new Error('Registro não encontrado.');
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao consultar o registro.');
  }
};

export { getById };
