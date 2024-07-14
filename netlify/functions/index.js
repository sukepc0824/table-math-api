const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: 'Hello World' }),
  };

  return response;
};