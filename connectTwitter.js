const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const userClient = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET
});

const clientWrite = userClient.readWrite
const clientRead = userClient.readOnly

module.exports = {clientWrite, clientRead}

