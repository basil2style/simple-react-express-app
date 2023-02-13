import express, { Application, Request, Response } from 'express';
import cors from 'cors';


import { findMedian } from "./lib/findMedian";
import { getPrimes } from "./lib/getPrimes";

export const app: Application = express()



const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello World" })
})

app.get('/prime/median/:number', async (req: Request, res: Response) => {

    if (!req.params.number || isNaN(parseInt(req.params.number))) { res.status(400).json({ message: "Please fill the required field" }); return; };

    const givenNum = parseInt(req.params.number);


    if (givenNum <= 1) { res.status(400).json({ error: "Couldn't calculate the median" }); return; }

    const primesNumbers = getPrimes(givenNum);

    const getMedian = findMedian(primesNumbers);

    res.status(200).json({ message: getMedian });
})

export default app