const axios = require('axios');
const { Console } = require('console');
const token = process.env.ACCESS_TOKEN;


// var d = new Date();
// var twoDaysAgo = d.getDate()-2;  
// var curr_month = d.getMonth()+1;
// var curr_year = d.getFullYear();
var days=3; // Days you want to subtract
var date = new Date();
var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
var day =last.getDate();
var month=last.getMonth()+1;
var year=last.getFullYear();

 var dateSetter =day + "-" + month + "-" + year;
 console.log(dateSetter);

function delay(time) {
    return new Promise(resolve =>
        setTimeout(resolve, time)
    );
}
const API_Calling = async (query_data) => {
  //env  
    try {
        const url = "https://dev-store-data.myshopify.com/admin/api/2021-10/graphql.json";
        const headers = {
            "Content-Type": "application/graphql",
            "X-Shopify-Access-Token": token,
            "Accept-Encoding": "gzip,deflate,compress"
        }
        console.log("try.............");
        return axios.post(url, query_data, { headers });

    } catch (error) {
        throw error
       // console.log(error)
    }
};

const order_task = async () => {
    //console.log("order_task")

   //var query = 'mutation {\r\n  bulkOperationRunQuery(\r\n   query: """\r\n    {\r\n      orders {\r\n        edges {\r\n          node {\r\n            id\r\n            createdAt\r\n          }\r\n        }\r\n      }\r\n    }\r\n    """\r\n  ) {\r\n    bulkOperation {\r\n      id\r\n      status\r\n    }\r\n    userErrors {\r\n      field\r\n      message\r\n    }\r\n  }\r\n}\r\n';
    //     axios({
    //       url: "https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json",
    //       method: "post",
    //       headers: {
    //         "Content-Type": "application/graphql",
    //         "X-Shopify-Access-Token": token,
    //         "Accept-Encoding": "gzip,deflate,compress"
    //       },
    //       data:data
    //     }).then(response => {
    //       res.status(200).json(response.data.data.bulkOperationRunQuery.bulkOperation.id);
    //       getURL();

    //     }).catch((err) => {
    //       res.status(500).json({ message: err });
    //      console.log("error......")

    //   }); 

    //const response_data = await API_Calling(data);
   // return response_data;


     console.log("collect data from "+dateSetter);

    const query = `mutation {
        bulkOperationRunQuery(
         query: """
          {
            orders(query: "created_at:>'${dateSetter}'") {
              edges {
                node {
                  id
                  createdAt
                }
              }
            }
          }
          """
        ) {
          bulkOperation {
            id
            status
          }
          userErrors {
            field
            message
          }
        }
      }`;
    const res = await API_Calling(query);
    const resdaat=res.data.data.bulkOperationRunQuery.bulkOperation.id;
    console.log("iddaat"+resdaat)
    return resdaat;
   
}

const getURL = (id_URLFinding) => {
    // var data = 'query {\r\n  node(id: "gid://shopify/BulkOperation/2175339659317") {\r\n    ... on BulkOperation {\r\n      url\r\n      partialDataUrl\r\n    }\r\n  }\r\n}';
    var data = 'query {  node(id: "gid://shopify/BulkOperation/2175339659317" ) {\r\n    ... on BulkOperation {\r\n      url\r\n      partialDataUrl\r\n    }\r\n  }\r\n}';

    var config = {
        method: 'post',
        url: 'https://dev-store-data.myshopify.com/admin/api/2021-10/graphql.json',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Access-Token': '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',
            'Cookie': '_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszWmpjeE5HWXlZUzFrTm1VNExUUTVOVEV0T0Rjek55MHlZelUwTVRsbU16ZG1NemdHT2daRlJnPT0iLCJleHAiOiIyMDI0LTA3LTI5VDA2OjU5OjQ0Ljk3OVoiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--67d6b4da2497145416c8dd58ebd854af09432a32; _secure_admin_session_id=a5d3aa50afffdb50870090765744aed2; _secure_admin_session_id_csrf=a5d3aa50afffdb50870090765744aed2'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}
const create_url =async (id) => {
  console.log(id);
    const query = `query {
        node(id: "${id}") {
          ... on BulkOperation {
                    url
                partialDataUrl
                  }
                }
              }`

              const res = await API_Calling(query);
             console.log(res.data.data.node.url);
             return res.data.data.node.url;






            // axios({
            //         url: "https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json",
            //         method: "post",
            //         headers: {
            //           "Content-Type": "application/graphql",
            //           "X-Shopify-Access-Token": token,
            //           "Accept-Encoding": "gzip,deflate,compress"
            //         },
            //         data:query
            //       }).then(response => {
            //         //res.status(200).json(response.data.data);
            //         console.log(response.data.data);
            //        return response.data.data;
                   
            //       }).catch((err) => {
            //        // res.status(500).json({ message: err });
            //        console.log("error......"+err)
          
            //     }); 

   
 
 

}
const getOrderList=async(url)=>{
  
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
} 

const getCSV=async(get_data)=>{

  let str =get_data;

  const result2= get_data.replace(/[\\:\/"}{}]/g, '');
//const regEx = new RegExp('',"g");
//const result = str.replace(regEx , '');
// const regEx3 = new RegExp('//',"g");
// const result3 = result.replace(regEx3 , '');
// const regEx2 = new RegExp('"id":"gid:\\shopify\Order\4775243284533',"g");
// const result2 = result3.replace(regEx2 , '');
 const regEx1 = new RegExp('idgidshopifyOrder',"g");
 const result1 = result2.replace(regEx1 , '');
const regEx4 = new RegExp('createdAt',"g");
const result4 = result1.replace(regEx4 , ''); 
var str_array = result4.split('\n');
var Text_data="ID, Created At  \n";
for(var i = 0; i < str_array.length; i++) {

Text_data=Text_data+str_array[i].substring(0,str_array[i].length-8)+'\n';

}


console.log(Text_data);

var fs = require('fs');
fs.writeFile('mynewfile3.csv', Text_data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
} 

const executation =async () => {
    console.log("methodcalling")
   
    const id =await order_task();
     await delay(3000);
   console.log("done"+id)
    const url_reponce=await create_url(id);
    await delay(6000);
   console.log("..."+url_reponce);
   //const url_reponce=`https://storage.googleapis.com/shopify-tiers-assets-prod-us-east1/72g005fxgb38r69s1ssim1pkhuri?GoogleAccessId=assets-us-prod%40shopify-tiers.iam.gserviceaccount.com&Expires=1678205117&Signature=cO%2FIiHBpjRnclwY%2FEFj0xYqmvSUUDSHthItFox58n6Cs8jgFmSxNh81yET2jA691JTQzALMh3Ez8nPQoerjMtqvBLNzAAVh2pJEgA5GdPl87U%2FaR2LBIh77oC5xxlw3Ta4YTVICSXRMQ5aljulqiPdcHUFAx2xzv%2FW7T%2Bov9TT%2B%2FLNGTt25Fl0Ov8KUQlDcFZi5SXAfxFywdJoLgK80dXfl7ApInP9EsMgtKhNcNPvGtQWVC%2B60pdEByFOhWKSZSlygIrygI9e7w96h97EurOKypXgRcT3WDiacJRSjg3H6zYkkSOQ2wSCuchezS3%2BSju4DaQOX9teVrH%2Fqwx8%2BT%2Fg%3D%3D&response-content-disposition=attachment%3B+filename%3D%22bulk-2206955143221.jsonl%22%3B+filename%2A%3DUTF-8%27%27bulk-2206955143221.jsonl&response-content-type=application%2Fjsonl`
    const get_data=await getOrderList(url_reponce);
    await delay(6000);
    const getDatewise=await getCSV(get_data);
    

};




module.exports = {
    executation
};