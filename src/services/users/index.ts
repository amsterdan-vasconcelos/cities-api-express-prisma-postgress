import * as create from './create';
import * as getByEmail from './getByEmail';

const usersServices = {
  ...create,
  ...getByEmail,
};

export { usersServices };
