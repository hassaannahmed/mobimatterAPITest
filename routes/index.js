const express = require('express');
 
const router = express.Router();
var path = __dirname + '/views/';
 
const https = require('https');
 
const axios = require('axios');
var bodyParser = require('body-parser');
var app = express();
 
router.use(bodyParser.urlencoded({
   extended: true
}));
//router.use(bodyParser.json());
 
router.get('/', (req, res) => {
   res.sendFile(path + "index.html");
});
 
router.get('/orderspage', (req, res) => {
    res.sendFile(path + "orders.html");
 });

 router.get('/buy', (req, res) => {
    res.sendFile(path + "buy.html");
 });

router.post("/orders/", function(req, res){
   //console.log(req.body)
//    var obj1 = {
//     "partnerId" : "60d800fa-426d-4b3a-a0f9-f0fb5cfe9755",
//     "offers":
//         [
//             {
//                 "id": "E7806032-3DF2-404C-95F3-1D964731D271",
//                 "quantity": 1
//             },
//             {
//                 "id": "EB2DA77C-4922-46C6-9F2A-F6491FD906B7",
//                 "quantity": 6
//             }
//         ]
//     }
    
     console.log(JSON.parse(req.body.data))
     //console.log(obj1)
   axios({
       method: 'post',
       url: 'https://mobimatterpartner-sandbox.azurewebsites.net/api/v1/orders',
       data: JSON.parse(req.body.data),
       headers: {
         'Content-Type': 'application/json',
         'Partner-Id' : '60d800fa-426d-4b3a-a0f9-f0fb5cfe9752'
       }
     }).then(function(resp){
         //console.log(.data.lineItems)
         res.status(200).send(resp.data)
     }).catch(function (error) {
       // handle error
       //console.log(error)
       res.status(200).send(error.response.data)
       //console.log(error.response.data);
     })
 
  
});
 
router.get("/orders/", function(req, res){
   //console.log(req.data)
   // axios({
   //     method: 'post',
   //     url: 'https://mobimatterpartner-sandbox.azurewebsites.net/api/v1/orders',
   //     data: JSON.parse(req.body.payload),
   //     headers: {
   //       'Content-Type': 'application/json'
   //       //'Partner-Id' : '60d800fa-426d-4b3a-a0f9-f0fb5cfe9755'
   //     }
   //   }).then(function(resp){
   //       console.log(resp.data.data.lineItems)
   //   }).catch(function (error) {
   //     // handle error
   //     console.log(error.response.data);
   //   })
 
   res.status(200).json({"ee":"qwe"})
});
 
module.exports = router;

