require('dotenv').config();
const express = require('express');


const fs = require('fs');
const cors = require('cors')
const shopifyRoutes = require('./routes/shopifyroutes')

// express app
const app = express();
app.use(express.json())
app.use(cors())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next() 
})


app.use('/api/shopify/products',shopifyRoutes);


const server = app.listen(process.env.PORT, () =>{

    console.log(' connected to DB listening on port',process.env.PORT)
    
})