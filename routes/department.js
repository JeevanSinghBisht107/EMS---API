import express from 'express';
import { authMiddleware, authorize } from '../middleware/authMiddleware.js'
import { addDepartment, getDepartments,getDepartment, updateDepartment} from '../controllers/departmentController.js';

const router = express.Router();

router.get('/',getDepartments)
router.post('/add',authMiddleware,authorize,addDepartment)
router.get('/:id',authMiddleware,getDepartment)
router.put('/:id',authMiddleware,authorize,updateDepartment)

export default router