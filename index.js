import express from 'express';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import photosRouter from './routes/photosRoutes.js';

const app = express();
dotenv.config()
const PORT = process.env.PORT 


app.get('/' ,(req, res) =>{
    res.status(200).send('Welcome to backend')
})

app.use('/products',productRoutes)

app.use('/comments', commentRoutes)

app.use('/photos', photosRouter)
// app.get('/profile/:id', (req, res) =>{
//     const id  = req.params.id;
//     res.status(200).send('Welcome to profile page ' + id)
// })

// app.get('/products', (req, res) =>{
//     res.status(200).send(
//         {
//             status: 200,
//             message: "success",
//             data: ProductsData
//         }
//     )
// })

app.get('*', (req, res) =>{
    res.status(404).send('Page not found')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 