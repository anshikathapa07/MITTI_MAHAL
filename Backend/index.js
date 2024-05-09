const express = require('express');
const app = express();
const port = 3000;
const cors =require('cors');

const userRouter = require('./Routers/User');
const productRouter = require('./Routers/Product');
const contactRouter = require('./Routers/Contact');
const utilRouter = require('./Routers/Util');



app.use(cors({
    origin: ['http://localhost:5173']
}))

//middlewear
app.use(express.json())
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/contact',contactRouter);
app.use('/util',utilRouter);
app.use(express.static('./static/uploads'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });





