import { prisma } from '@/libs/prisma';
import { Person } from '@/types/models';

type UpdateByIdProps = {
  id: number;
  person: Partial<Omit<Person, 'id' | 'cityId'>>;
};

type UpdateById = ({ id, person }: UpdateByIdProps) => Promise<void | Error>;

const updateById: UpdateById = async ({ id, person }) => {
  try {
    await prisma.person.update({
      where: { id },
      data: { ...person },
    });
  } catch (error) {
    console.log('Provider - error:', error);
    return new Error('Erro ao atualizar o registro.');
  }
};

export { updateById };
