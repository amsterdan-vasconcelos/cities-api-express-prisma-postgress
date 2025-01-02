import { prisma } from '@/libs/prisma';
import { City } from '@/types/models';

type GetAllProps = {
  page: number;
  per_page: number;
  search?: string;
  id?: number;
};

type GetAll = (filters: GetAllProps) => Promise<City[] | Error>;

const getAll: GetAll = async ({ page, per_page, search, id }) => {
  try {
    const cities = await prisma.city.findMany({
      skip: (page - 1) * per_page,
      take: per_page,
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
