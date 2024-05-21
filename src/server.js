import express from 'express';
import { StatusCodes } from 'http-status-codes';
import helmet from "helmet";

import userRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';


const app = express();
const port = 3000;


app.use(express.json());
app.use(helmet());

app.use('/v1/user', userRoutes);
app.use('v1/', mainRoutes);

// localhost
app.get('/home', (req, res)=> {
    res.status(StatusCodes.CREATED)
    res.send('Hello Emma!');
});

app.listen(port, () =>{
    console.log(`Hey, let go to http://localhost:${port}`);
});