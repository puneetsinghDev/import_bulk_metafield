const axios=require('axios');
const token=process.env.ACCESS_TOKEN;
var jsonlines = require('jsonlines')
var parser = jsonlines.parse()


// axios.get("url", { 
//   headers: { "Accept-Encoding": "gzip,deflate,compress" } 
// });
const testGraphQL=(req, res)=>{

  //   const data = `{
  //       products (first: 3) {
  //         edges {
  //           node {
  //             id
  //             title
  //           }
  //         }
  //       }
  //     }`
    
  //   axios({
  //     url: "https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json",
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/graphql",
  //       "X-Shopify-Access-Token": token,
  //       "Accept-Encoding": "gzip,deflate,compress"
  //     },
  //     data:data
  //   }).then(response => {
  //     res.status(200).json(response.data.products);
      
  //   }).catch((err) => {
  //     res.status(500).json({ message: err });
  //    console.log("error......")
      
  // }); 



  // var data = '{\r\n  products (first: 3) {\r\n    edges {\r\n      node {\r\n        id\r\n        title\r\n      }\r\n    }\r\n  }\r\n}';

  // var config = {
  //   method: 'post',
  //   url: 'https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json',
  //   headers: { 
  //     'Content-Type': 'application/graphql', 
  //     'X-Shopify-Access-Token': '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', 
  //     'Cookie': '_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszWmpjeE5HWXlZUzFrTm1VNExUUTVOVEV0T0Rjek55MHlZelUwTVRsbU16ZG1NemdHT2daRlJnPT0iLCJleHAiOiIyMDI0LTA3LTI5VDA2OjU5OjQ0Ljk3OVoiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--67d6b4da2497145416c8dd58ebd854af09432a32'
  //   },
  //   data : data
  // };
  
  // axios(config)
  // .then(function (response) {
  //   res.status(200).send(response.data)
  //  // console.log(response.data.products.edges);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });


 // const data = 'mutation {\r\n  bulkOperationRunQuery(\r\n   query: """\r\n    {\r\n      products {\r\n        edges {\r\n          node {\r\n              id\r\n              metafields {\r\n                edges {\r\n                    node {\r\n                        value\r\n                        namespace\r\n                        id\r\n                        key\r\n                        }\r\n                    }\r\n                }\r\n          }\r\n        }\r\n      }\r\n    }\r\n    """\r\n  ) {\r\n    bulkOperation {\r\n      id\r\n      status\r\n    }\r\n    userErrors {\r\n      field\r\n      message\r\n    }\r\n  }\r\n}';
const data=`mutation {
  bulkOperationRunQuery(
   query: """
    {
      products {
        edges {
          node {
            id
            title
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
}
`
const config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json',
  headers: { 
    'X-Shopify-Access-Token': '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', 
    'Content-Type': 'application/graphql',
    'Accept-Encoding':'gzip, deflate, br'
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  res.send(response.data.data)
 console.log(JSON.stringify(response.data.data.bulkOperationRunQuery.bulkOperation.id));
  fun(response.data.data.bulkOperationRunQuery.bulkOperation.id); 
})
.catch(function (error) {
  console.log(error);
});

}



const fun=(IDS)=>{
  const data=`query {
    node(id: "gid://shopify/BulkOperation/2164530053173" ) {
      ... on BulkOperation {
        url
        partialDataUrl
      }
    }
  }
  `

//console.log(data);
const config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://dev-store-data.myshopify.com/admin/api/2023-01/graphql.json',
  headers: { 
    'X-Shopify-Access-Token': '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', 
    'Content-Type': 'application/graphql'
    
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  urlmethod();
  console.log(response.data.data.node.url);
})
.catch(function (error) {
  console.log(error);
});

}



const urlmethod=()=>{
  var config = {
    method: 'get',
    url: 'https://storage.googleapis.com/shopify-tiers-assets-prod-us-east1/mxsthl783ejlaw612r3f4z7bqfod?GoogleAccessId=assets-us-prod%40shopify-tiers.iam.gserviceaccount.com&Expires=1677479381&Signature=s%2BWrFCv5OgeGGF8asj%2FQBlsJwPGbp5PGAgSMzAo7Fkq%2FQoYyeR%2BxK7VTuQMaCd8I7%2B3PNDz5WVykgHryKZv%2F0mZHyoNdOnI7gPRgIcrejUegs2KwWE1TEm%2Fi988wsnHQQ8l8fWHnq4iweMPw4ylPvqVGDFK7RlHaEcMvZCzcqZ5QlellMdfpy82AJFUfHAA%2FNEoWeDnQWXz%2BkrNPfBI7h1Dbnkl3yQ9Xv0UAjs%2Fr65ZhUN4egxH9v7OhXh3PcGVZjnti19n0FgELGhd1UA3HNUv9BXwv2L1gHkjrFRckASUfg6oEEiKQWicyS%2F3F7riA46GCeaKud94tnQgljWaZkg%3D%3D&response-content-disposition=attachment%3B+filename%3D%22bulk-2164530053173.jsonl%22%3B+filename%2A%3DUTF-8%27%27bulk-2164530053173.jsonl&response-content-type=application%2Fjsonl',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
   // console.log(response.data);
    const fdata=response.data;
    console.log(fdata);

    // parser.on('data', function (fdata) {
    //   console.log('Got json:', fdata)
    // })



  })
  .catch(function (error) {
    console.log(error);
  });
}




const getProduct=(req, res)=>{
  console.log("hiii");
  res.status(200).json("hello");
}

module.exports = {
    getProduct,
    testGraphQL
};