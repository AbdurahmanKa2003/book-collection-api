import { Router } from 'express';
import { addBook } from '../controllers/bookController';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/books', authMiddleware, adminMiddleware, addBook);



export default router;
