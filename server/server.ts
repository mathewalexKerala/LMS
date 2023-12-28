import {app} from'./app'
require('dotenv').config();
import connectDB from './utils/db';
import {v2 as cloudinary} from 'cloudinary'

//cloudinary config
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  secret_key:process.env.CLOUD_SECRET_KEY,
})


//server create
app.listen(process.env.PORT,()=>{
  
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB()
})