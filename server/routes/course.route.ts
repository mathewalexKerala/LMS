import express from 'express'
import { editCourse, getAllCourses, getSingleCourse, uploadCourse } from '../controllers/course.controller'
import { authorizeRoles, isAuthenticated } from '../middleware/auth'

const courseRouter = express.Router()

courseRouter.post(
  '/create-course',
  isAuthenticated,
  authorizeRoles('admin'),
  uploadCourse
)

courseRouter.put(
  '/edit-course:id',
  isAuthenticated,
  authorizeRoles('admin'),
  editCourse
)
//get single course without purchase
courseRouter.get(
  '/get-course:id',
 getSingleCourse
)

courseRouter.get(
  '/get-courses:id',
 getAllCourses
)
export default courseRouter;