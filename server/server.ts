import {app} from'./app'
require('dotenv').config();
import connectDB from './utils/db';
//server create
app.listen(process.env.PORT,()=>{
  
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB()
})