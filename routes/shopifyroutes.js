const express=require('express');
const { importdata } = require('../controller/import._data');
// const getProduct = require('../controller/getproduct');
// const { testGraphQL } = require('../controller/testGraphQL');
const { executation } = require('../controller/order');
const router=express.Router();

// router.get('/', getProduct);
// router.get('/graphQL',testGraphQL);
router.get('/order',executation );
router.get('/import',importdata);
module.exports=router;