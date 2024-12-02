import express from 'express';
import { commentsData } from '../comments.js';


const commentRoutes = express.Router();

commentRoutes.get('/',(req, res) => {
    res.status(200).send({
        message: 'Comments API',
        status: 'success',
        data: commentsData
    })
})

export default commentRoutes