import { Router } from 'express';

import { citiesController } from '@/controllers';
import { ensureAuthenticated } from '@/middlewares';

const router = Router();

router.use(ensureAuthenticated);

router.get(
  '/cities',
  citiesController.getAllValidator,
  citiesController.getAll,
);

router.get(
  '/cities/:id',
  citiesController.getByIdValidator,
  citiesController.getById,
);

router.post(
  '/cities',
  citiesController.createValidator,
  citiesController.create,
);

router.put(
  '/cities/:id',
  citiesController.updateByIdValidator,
  citiesController.updateById,
);

router.delete(
  '/cities/:id',
  citiesController.deleteByIdValidator,
  citiesController.deleteById,
);

export { router };
