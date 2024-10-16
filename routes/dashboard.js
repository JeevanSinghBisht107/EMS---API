import express from "express";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js"
import { getSummary } from "../controllers/dashboardController.js";

const router = express.Router()

router.get('/summary',authMiddleware,authorize,getSummary)

export default router;