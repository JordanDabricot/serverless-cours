'use strict';

const fetch = require('node-fetch');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.get = (event, context, callback) => {
    s3.listObjectsV2({
        Bucket: "cfa-bucket-2019"
    })
    .promise()
    .then(v => callback(null, {
        "headers": {},
        "body": JSON.stringify(v),
        "statusCode": 200,
        "isBase64Encoded": false
        }), callback);
    
    s3.getBucket
}