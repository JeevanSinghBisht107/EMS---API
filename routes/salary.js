import express from 'express';
import { authMiddleware, authorize } from '../middleware/authMiddleware.js'
import { addSalary,getSalary } from '../controllers/salaryController.js';


const router = express.Router()

router.post('/add',authMiddleware,authorize,addSalary)
router.get('/:id/:role',authMiddleware,getSalary)

export default router