import * as create from './create';
import * as deleteById from './deleteById';
import * as getAll from './getAll';

const peopleController = {
  ...create,
  ...deleteById,
  ...getAll,
};

export { peopleController };
