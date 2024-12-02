import express from 'express';
import { ProductsData } from '../projucts.js';

const productRoutes = express.Router()

productRoutes.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "All Products",
        data: ProductsData
    })
})


export default productRoutes

