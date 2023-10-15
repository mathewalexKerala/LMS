import express from 'express'
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from '../controllers/course.controller'
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
  isAuthenticated,
 getSingleCourse
)

courseRouter.get(
  '/get-courses:id',
 getAllCourses
)

courseRouter.get(
  '/get-course-content/:id',
 getCourseByUser
)

courseRouter.put(
  '/add-question',
  isAuthenticated,
 addQuestion
)


courseRouter.put(
  '/add-answer',
  isAuthenticated,
 addAnswer
)


courseRouter.put(
  '/add-review/:id',
  isAuthenticated,
 addReview
)


courseRouter.put(
  '/add-reply',
  isAuthenticated,
  authorizeRoles('admin'),
  addReplyToReview
)

courseRouter.put(
  '/get-courses',
  isAuthenticated,
  authorizeRoles('admin'),
  getAllCourses
)


courseRouter.delete(
  '/delete-courses/:id',
  isAuthenticated,
  authorizeRoles('admin'),
  deleteCourse
)


export default courseRouter;