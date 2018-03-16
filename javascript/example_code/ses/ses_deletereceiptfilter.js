/*
   Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

   This file is licensed under the Apache License, Version 2.0 (the "License").
   You may not use this file except in compliance with the License. A copy of
   the License is located at

    http://aws.amazon.com/apache2.0/

   This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
   CONDITIONS OF ANY KIND, either express or implied. See the License for the
   specific language governing permissions and limitations under the License.
     
   ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
   https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-ip-filters.html
*/

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).deleteReceiptFilter({FilterName: "NAME"}).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log("IP Filter deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
