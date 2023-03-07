// const { executation } = require("./controller/order");
// const { readxls } = require("./helper/readxlsx");

// filePath = './test.xlsx';

// console.log("hello");

// const data=`{"id":"gid:\/\/shopify\/Order\/4775243284533","createdAt":"2023-02-28T06:06:10Z"}
// {"id":"gid:\/\/shopify\/Order\/4775244202037","createdAt":"2023-02-28T06:07:14Z"}`;

//    let str =data;

//    const regEx = new RegExp('}',"g");
//    const result = str.replace(regEx , '');
//    const regEx3 = new RegExp('{',"g");
//    const result3 = result.replace(regEx3 , '');
  
//    const regEx2 = new RegExp('"id":"gid://shopify/Order/',"g");
//    const result2 = result3.replace(regEx2 , '');
//    const regEx1 = new RegExp('"',"g");
//    const result1 = result2.replace(regEx1 , '');
//    const regEx4 = new RegExp('createdAt:',"g");
//    const result4 = result1.replace(regEx4 , ''); 
// //console.log(result4);

   
// //let output = result4.replace(/\T.*/g,"$'")


// var str_array = result4.split('\n');
// var Text_data="ID, Created At  \n";
// for(var i = 0; i < str_array.length; i++) {
// //console.log(str_array[i]+".......");
//  // console.log(str_array[i].substring(0,str_array[i].length-10));
//   Text_data=Text_data+str_array[i].substring(0,str_array[i].length-10)+'\n';

// }


//    console.log("...."+Text_data);

//   //  var fs = require('fs');
//   //  fs.writeFile('mynewfile3.csv', result3, function (err) {
//   //      if (err) throw err;
//   //      console.log('Saved!');
//   //    });

//   // var d =  new Date();
//   // const dddd=d.getDate()-2;
//   // console.log(d);
//   // console.log(dddd);


// //   var d1 = new Date();
// // d1.setDate(d1.getDate() - 2);
// // console.log(d1.toString());


// // var d = new Date();
// // var twoDaysAgo = d.getDate()-2;  //change day here
// // var curr_month = d.getMonth();
// // var curr_year = d.getFullYear();
// // var x = twoDaysAgo + "-" + curr_month + "-" + curr_year;

// // console.log(x);

// // console.log(filePath);
// //const read=readxls(filePath);


// //console.log(read[0]);



// var d = new Date();
// var twoDaysAgo = d.getDate()-2;  
// var curr_month ="";
// if (twoDaysAgo<=2){
//   curr_month=d.getMonth();
//   console.log("....") 
// }else{
// curr_month=d.getMonth()+1; 
// }

// var curr_year = d.getFullYear();
// var dateSetter =curr_year + "-" + curr_month + "-" + twoDaysAgo;
// console.log(dateSetter)


var days=2; // Days you want to subtract
var date = new Date();
var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
var day =last.getDate();
var month=last.getMonth()+1;
var year=last.getFullYear();

 var dateSetter =day + "-" + month + "-" + year;
 console.log(dateSetter);