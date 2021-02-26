import express from 'express';
import MessageController from '../controllers/MessageController';
import Validations from '../middleware/Validations';
import HeaderToken from '../middleware/HeaderToken';

const router = express.Router();

router.post('/messages', Validations.validateMessage, HeaderToken.isUser, MessageController.createMessage);

// I didn't close those endpoint, but if you want add this middleware ==> HeaderToken.isUser
router.get('/messages', MessageController.viewMessages);
router.get('/messages/:messageId', MessageController.viewOneMessage);

router.delete('/messages/:messageId', HeaderToken.isUser, MessageController.removeMessage);

export default router;
