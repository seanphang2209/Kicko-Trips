import express from 'express';
import { getDropdowns } from '../controllers/getDropdowns.js';

const router = express.Router();

router.get('/', getDropdowns);

export default router; 