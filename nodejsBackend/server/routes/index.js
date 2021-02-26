import Router from 'express';
import authRoutes from './authRoutes';
import messageRoutes from './messageRoutes';

const router = Router();

router.use(authRoutes);
router.use(messageRoutes);

export default router;
