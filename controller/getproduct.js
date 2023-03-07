const axios=require('axios');
const token=process.env.ACCESS_TOKEN;
require('dotenv').config();
const express=require('express');
const bodyparser=require('body-parser');
constjsonparser=bodyparser.json;
const iddata=[];
 const dddddd=[];
 
let fail = 0;
let success = 0;
let count = 0;
var time = 1000;

const getProduct = async (req, res) => {
    axios({
      url: "https://dev-store-data.myshopify.com/admin/api/2022-04/products.json",
      method: "get",
      headers: {
        "Content-Type": "application/graphql",
        "X-Shopify-Access-Token": token,
        "Accept-Encoding": "gzip,deflate,compress"
      }
    }).then(response => {
      //res.status(200).json(response.data.products);
      const data2=response.data.products;
     // console.log(data2.length)
      data2.forEach(element => {
        iddata.push(element.id);
      });
      //console.log(iddata);
const fundata= fun(iddata);
//console.log(fundata);


    }).catch((err) => {
     // res.status(500).json({ message: err });
    });
  };
       


  const fun=(dtaaid)=>{
var num=0;

    dtaaid.map(item => {
 
      //console.log(item)
      setTimeout(() => {
      
        axios({
          url: "https://dev-store-data.myshopify.com/admin/api/2022-10/products/" + item + "/metafields.json",
          method: "get",
          headers: {
              "Content-Type": "application/graphql",
              "X-Shopify-Access-Token": token,
              "Accept-Encoding": "gzip,deflate,compress"
          }
          
          
      }).then(response => {
        //  res.status(200).json(response.data);
       console.log(response.data.metafields);
    
      const arr=response.data.metafields;
      // console.log(arr.length);
        if(arr.length!==0){
         //dddddd=dddddd+(response.data.metafields);
        //  dddddd.concat(response.data.metafields);

        const newArr = Array.prototype.concat(...arr);
         console.log(newArr);
        }




      }).catch((err) => {
          //res.status(500).json({ message: err });
          console.log("error.........");
          
      }); 


      }, time * count);
      count++;
      num++;

  })
  //console.log(dddddd);

return response.data

  }








// const getProduct=(req, res)=>{
//   console.log("hiii");
//   res.status(200).json("hello");
// }
  module.exports=getProduct;