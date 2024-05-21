import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';


import userServices from './services/user.services.js';
import { getUser, addUser, updateUser, deleteUser } from './user.schema.js';
import userController from './controllers/user.controller.js';

const router = express.Router();
const STATUS = {
    SUCCESS: 'OK',
    FAILURE: "NO",
};

// get all users
router.get("/all", 
    userController.getAllUsers,
);


// get a user
router.get("/:id", 
    expressYupMiddleware({schemaValidator: getUser}),
    userController.getUser,
);


// send data (Add user)
router.post(
    '/', 
    expressYupMiddleware({ schemaValidator: addUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
    }),
    userController.addUser,
);


// send data (Update user)
router.put(
    
    "/:id",
    expressYupMiddleware({ schemaValidator: updateUser}),
    userController.updateUser,
);

// remove user
router.delete("/:id", 
    expressYupMiddleware({schemaValidator: deleteUser}),
    userController.deleteUser,
);


export default router;


