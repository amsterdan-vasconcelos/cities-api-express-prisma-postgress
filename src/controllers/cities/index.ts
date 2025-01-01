import * as create from './create';
import * as deleteById from './deleteById';

const citiesController = {
  ...create,
  ...deleteById,
};

export { citiesController };
