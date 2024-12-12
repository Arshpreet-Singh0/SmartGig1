import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authRouter from './routes/user.routes'
const app = express();

//middlewares
app.use(express.json());

//api's

app.use('/api/v1', authRouter);

const PORT = process.env.PORT || 8080;

app.get('/', async(req:Request, res:Response)=>{
    res.send('Working');
})

app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})