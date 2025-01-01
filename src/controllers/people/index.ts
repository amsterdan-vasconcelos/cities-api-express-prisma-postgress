import * as create from './create';
import * as deleteById from './deleteById';

const peopleController = {
  ...create,
  ...deleteById,
};

export { peopleController };
