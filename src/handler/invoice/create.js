'use strict';

const fetch = require('node-fetch');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.create = (event, context, callback) => {
    var body = JSON.parse(event.body)
    fetch(body.image_url)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      return Promise.reject(new Error(
            `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`));
    })
    .then(response => response.buffer())
    .then(buffer => (
      s3.putObject({
        Bucket: process.env.BUCKET,
        Key: body.key,
        Body: buffer,
      }).promise()
    ))
    .then(v => callback(null, {
      "headers": {},
      "body": JSON.stringify(body),
      "statusCode": 200,
      "isBase64Encoded": false
      }), callback);
}