import { prisma } from '@/libs/prisma';
import { type CreatePerson } from '@/types/models';

type Create = (person: CreatePerson) => Promise<number | Error>;

const create: Create = async (person) => {
  try {
    const city = await prisma.city.findUnique({ where: { id: person.cityId } });

    if (!city) {
      return new Error('A cidade usada no cadastro não foi encontrada.');
    }

    const createdPerson = await prisma.person.create({
      data: person,
    });

    return createdPerson.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Error('Error ao cadastrar o registro.');
  }
};

export { create };
