import { prisma } from '@/libs/prisma';
import { Person } from '@/types/models';

type GetAllProps = {
  page: number;
  limit: number;
  search?: string;
};

type GetAll = (filters: GetAllProps) => Promise<Person[] | Error>;

const getAll: GetAll = async ({ page, limit, search }) => {
  try {
    const people = await prisma.person.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: { fullName: { contains: search } },
    });

    return people;
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Bruna ao consultar os registros.');
  }
};

export { getAll };
