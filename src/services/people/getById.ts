import { prisma } from '@/libs/prisma';
import { Person } from '@/types/models';

type GetById = (id: number) => Promise<Person | Error>;

const getById: GetById = async (id) => {
  try {
    const person = await prisma.person.findUnique({ where: { id } });
    if (person) return person;

    return new Error('Registro não encontrado.');
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao consultar o registro.');
  }
};

export { getById };
