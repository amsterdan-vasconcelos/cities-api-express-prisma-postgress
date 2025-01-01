import { Router } from 'express';

import { usersController } from '@/controllers';

const router = Router();

router.post('/signin', usersController.signInValidator, usersController.signIn);

router.post('/signup', usersController.signUpValidator, usersController.signUp);

export { router };
