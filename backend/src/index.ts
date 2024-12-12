import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import authRouter from './routes/user.routes';
import projectRouter from './routes/project.routes';
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

//api's

app.use('/api/v1/user', authRouter);
app.use('/api/v1/project', projectRouter);

const PORT = process.env.PORT || 8080;

app.get('/', async(req:Request, res:Response)=>{
    res.send('Working');
})

app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})