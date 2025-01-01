import { Router } from 'express';

import { citiesController } from '@/controllers';
import { ensureAuthenticated } from '@/middlewares';

const router = Router();

router.get(
  '/cities',
  ensureAuthenticated,
  citiesController.getAllValidator,
  citiesController.getAll,
);

router.get(
  '/cities/:id',
  ensureAuthenticated,
  citiesController.getByIdValidator,
  citiesController.getById,
);

router.post(
  '/cities',
  ensureAuthenticated,
  citiesController.createValidator,
  citiesController.create,
);

router.put(
  '/cities/:id',
  ensureAuthenticated,
  citiesController.updateByIdValidator,
  citiesController.updateById,
);

router.delete(
  '/cities/:id',
  ensureAuthenticated,
  citiesController.deleteByIdValidator,
  citiesController.deleteById,
);

export { router };
