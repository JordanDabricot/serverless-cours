'use strict';

const fetch = require('node-fetch');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.create = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Controle-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Authenticated call!',
            input: event
        })
    };
    callback(null, response);
}