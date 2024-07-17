import { Router } from 'express';
import { registerUser } from '../controllers/userController';

const router = Router();

router.post('/users/register', registerUser);



export default router;
