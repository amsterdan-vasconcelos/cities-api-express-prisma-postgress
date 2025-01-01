import * as create from './create';
import * as deleteById from './deleteById';
import * as getAll from './getAll';
import * as getById from './getById';

const citiesController = {
  ...create,
  ...deleteById,
  ...getAll,
  ...getById,
};

export { citiesController };
