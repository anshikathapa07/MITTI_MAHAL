const express = require('express');
const app = express();
const port = 3000;
const cors =require('cors');

const userRouter = require('./Routers/User');
const productRouter = require('./Routers/Product');
const contactRouter = require('./Routers/Contact');



app.use(cors({
    origin: ['http://localhost:5173']
}))

//middlewear
app.use(express.json())
app.use('/user',userRouter);

app.use('/product',productRouter);

app.use('/contact',contactRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });





