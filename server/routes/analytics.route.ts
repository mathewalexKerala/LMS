import express from 'express'
const analyticsRouter = express.Router()
import { authorizeRoles,isAuthenticated } from '../middleware/auth'
import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from '../controllers/analytics.controller'

analyticsRouter.get('/get-users-analytics',isAuthenticated,authorizeRoles('admin'),getUsersAnalytics)

analyticsRouter.get('/get-orders-analytics',isAuthenticated,authorizeRoles('admin'),getOrderAnalytics)

analyticsRouter.get('/get-courses-analytics',isAuthenticated,authorizeRoles('admin'),getCoursesAnalytics)


export default analyticsRouter;

