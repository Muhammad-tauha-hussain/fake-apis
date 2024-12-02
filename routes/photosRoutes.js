import express from 'express';
import { photosData } from '../photos.js';

const photosRouter = express.Router();

photosRouter.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
    message: 'success',
    data: photosData
    })
    
})

export default photosRouter