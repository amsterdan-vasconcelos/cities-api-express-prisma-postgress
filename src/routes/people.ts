import { Router } from 'express';

import { peopleController } from '@/controllers';
import { ensureAuthenticated } from '@/middlewares';

const router = Router();

router.use(ensureAuthenticated);

router.get(
  '/people',
  peopleController.getAllValidator,
  peopleController.getAll,
);

router.get(
  '/people/:id',
  peopleController.getByIdValidator,
  peopleController.getById,
);

router.post(
  '/people',
  peopleController.createValidator,
  peopleController.create,
);

router.put(
  '/people/:id',
  peopleController.updateByIdValidator,
  peopleController.updateById,
);

router.delete(
  '/people/:id',
  peopleController.deleteByIdValidator,
  peopleController.deleteById,
);

export { router };
