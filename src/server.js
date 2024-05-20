import express from 'express';
import { StatusCodes } from 'http-status-codes';
import appRoutes from './app.routes.js';

const app = express();
const port = 3000;


app.use(express.json());

app.use('/v1', appRoutes);


// localhost
app.get('/home', (req, res)=> {
    res.status(StatusCodes.CREATED)
    res.send('Hello Emma!');
});

app.listen(port, () =>{
    console.log(`Hey, let go to http://localhost:${port}`);
});