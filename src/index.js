
import dotenv from 'dotenv';
import connectDB from './db/index.js'
import { app } from './app.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.on("error",error=> console.log("ERROR:",error))
    app.listen(process.env.PORT||7000,()=> console.log(`server is running at port : ${process.env.PORT}`))
})
.catch( error => console.log("MONGODB  CONNECTION FAILED>>>",error))













/*
import express from 'express';

const app = express()

;(async()=>{
    try {
         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
         app.on("error",(error)=> console.log("ERROR:",error))

         app.listen(process.env.PORT,()=> console.log(`App is listening on port ${process.env.PORT}`))

    } catch (error) {
        console.log(error);
        throw error ;
    }
})()
*/