import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const port = 3000;
const STATUS = {
    SUCCESS: 'OK',
    FAILURE: "NO",
};


// localhost
router.get('/home', (req, res)=> {
    res.status(StatusCodes.CREATED)
    res.send('Hello Emma!');
});

// send data (CRUD)
router.post("/add", (req, res)=> {
    const data  = [];
    const { body} =req;

    if(!body.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status:STATUS.FAILURE,
            message: 'Name is required',
        });
    };


    data.push(req.body);
    res.status(StatusCodes.CREATED).send({
        status:STATUS.SUCCESS,
        message: data,
    });
});


export default router;


