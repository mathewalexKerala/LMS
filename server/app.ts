require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express';
export const app = express()

import cors from 'cors'
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './middleware/error'
import userRouter from './routes/user.route';
import courseRouter from './routes/course.route';
import orderRouter from './routes/order.route';
import notificationRoute from './routes/notification.route';
import analyticsRouter from './routes/analytics.route';
import layoutRouter from './routes/layout.route';

//body parser 
app.use(express.json({ limit: '50mb' }))

//cookie-parse
app.use(cookieParser())

//cors
app.use(cors({
  origin: process.env.ORIGIN
}));
//routes

app.use('/api/v1', userRouter,orderRouter,courseRouter,notificationRoute,analyticsRouter,layoutRouter)




//testing api 
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "API is working",
    success: true,
  })

});

//unknown route
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  console.log('this is unknown route')
  const err = new Error(`Route ${req.originalUrl} not found`);
  next(err)
})

app.use(ErrorMiddleware)










