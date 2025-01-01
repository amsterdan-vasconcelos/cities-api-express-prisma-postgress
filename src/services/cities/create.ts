import { prisma } from '@/libs/prisma';
import { CreateCity } from '@/types/models';

type Create = (city: CreateCity) => Promise<number | Error>;

const create: Create = async (city) => {
  try {
    const createdCity = await prisma.city.create({
      data: { name: city.name },
      select: { id: true },
    });

    return createdCity.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Error('Error ao cadastrar o registro.');
  }
};

export { create };
