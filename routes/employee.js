import express from 'express';
import { authMiddleware, authorize } from '../middleware/authMiddleware.js'
import { addEmployee,getEmployees,upload,getEmployee,updateEmployee,fetchEmployeesByDepTd } from '../controllers/employeeController.js';


const router = express.Router()

router.get("/",authMiddleware,getEmployees)
router.post('/add',authMiddleware,upload.single('image'),authorize,addEmployee)
router.get("/:id",authMiddleware,getEmployee)
router.put("/:id",authMiddleware,authorize,updateEmployee)
router.get('/department/:id',authMiddleware,fetchEmployeesByDepTd)

export default router