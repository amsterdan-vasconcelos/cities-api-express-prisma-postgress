import { prisma } from '@/libs/prisma';
import { City } from '@/types/models';

type GetAllProps = {
  page?: number;
  limit?: number;
  search?: string;
  id?: number;
};

type GetAll = (filters: GetAllProps) => Promise<City[] | Error>;

const getAll: GetAll = async ({ page = 0, limit = 10, search, id }) => {
  try {
    const cities = await prisma.city.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        name: { contains: search, mode: 'insensitive' },
      },
    });

    if (id) {
      const cityById = await prisma.city.findUnique({ where: { id } });

      if (cityById) {
        return [...cities, cityById];
      }
    }

    return cities;
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao consultar os registros.');
  }
};

export { getAll };
