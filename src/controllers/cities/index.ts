import * as create from './create';
import * as deleteById from './deleteById';
import * as getAll from './getAll';

const citiesController = {
  ...create,
  ...deleteById,
  ...getAll,
};

export { citiesController };
