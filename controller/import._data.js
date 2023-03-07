const axios = require('axios');
const token = process.env.ACCESS_TOKEN;


const apiCall=async(query_data)=>{
  const url= 'https://dev-store-data.myshopify.com/admin/api/2021-07/graphql.json';
 const headers={ 
    'Content-Type': 'application/graphql', 
    'X-Shopify-Access-Token': token, 
}
return axios.post(url, query_data, { headers });
}
const importquery=async()=>{
    const query=`mutation {
        stagedUploadsCreate(input:{
          resource: BULK_MUTATION_VARIABLES,
          filename: "bulk_op_vars",
          mimeType: "text/jsonl",
          httpMethod: POST
        }){
          userErrors{
            field,
            message
          },
          stagedTargets{
            url,
            resourceUrl,
            parameters {
              name,
              value
            }
          }
        }
      }`
        console.log("try.............");
      const urlid=await apiCall(query);
      
     const url=urlid.data.data.stagedUploadsCreate.stagedTargets[0].url;
      console.log(urlid.data.data.stagedUploadsCreate.stagedTargets[0].parameters[3].value+"key....");
      console.log(urlid.data.data.stagedUploadsCreate.stagedTargets[0].parameters[4].value+"x-goog-date....");
      console.log(urlid.data.data.stagedUploadsCreate.stagedTargets[0].parameters[5].value+"x-goog-credential....");
      console.log(urlid.data.data.stagedUploadsCreate.stagedTargets[0].parameters[6].value+"x-goog-algorithm...");
      console.log(urlid.data.data.stagedUploadsCreate.stagedTargets[0].parameters);

}
const importdata=async()=>{
console.log("import");
const id= await importquery();

}


module.exports={
    importdata
}