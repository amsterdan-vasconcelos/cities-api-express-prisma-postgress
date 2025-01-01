import { prisma } from '@/libs/prisma';
import { City } from '@/types/models';

type UpdateByIdProps = {
  id: number;
  city: Omit<City, 'id'>;
};

type UpdateById = ({ id, city }: UpdateByIdProps) => Promise<void | Error>;

const updateById: UpdateById = async ({ id, city }) => {
  try {
    await prisma.city.update({
      where: { id },
      data: { ...city },
    });
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao atualizar o registro.');
  }
};

export { updateById };
