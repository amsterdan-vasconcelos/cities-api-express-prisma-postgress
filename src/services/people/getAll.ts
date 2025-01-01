import { prisma } from '@/libs/prisma';
import { Person } from '@/types/models';

type GetAllProps = {
  page?: number;
  limit?: number;
  search?: string;
};

type GetAll = (filters: GetAllProps) => Promise<Person[] | Error>;

const getAll: GetAll = async ({ page = 0, limit = 10, search }) => {
  try {
    const people = await prisma.person.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: { fullName: { contains: search } },
    });

    return people;
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao consultar os registros.');
  }
};

export { getAll };
