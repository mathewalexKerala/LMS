
import  ErrorHandler  from '../utils/ErrorHandler'
import { NextFunction, Request, Response } from 'express'

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error'

  //wrong mongodb id error
  if (err.name === 'CastError') {
    const message = `Resource not found, Invalid: ${err.path}`
    err = new ErrorHandler(message, 404)
  }
  if (err.code === 1100) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`
    err = new ErrorHandler(message, 400)
  }
  // wrong jwt error
  if (err.name === 'JsonwebTokenError') {
    const message = 'Json web toke is invalid ,try again';
    err = new ErrorHandler(message, 400)
  }

  //Jwt expires error

  if (err.name = 'TokenExpireError') {
    const message = "Json web token is expired, try again"
    err = new ErrorHandler(message, 400)
  }
  res.status(err.statusCode).json({
    success: true,
    message: err.message
  })
}
