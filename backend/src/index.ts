import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/',(req:Request, res:Response)=>{
    res.send('Working');
})

app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})