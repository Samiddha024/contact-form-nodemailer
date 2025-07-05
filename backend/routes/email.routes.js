// routes/contact.routes.js
import express from 'express';
import { sendContactEmail } from '../controllers/email.controller.js';

const router = express.Router();

router.post('/contact', sendContactEmail);

export default router;
