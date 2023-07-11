const { TwitterApi } = require('twitter-api-v2');
const fs = require("fs")
const download = require('./DownloadImage');
require('dotenv').config();

const userClient = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET
});
// To read we use bearer
//const bearer = new TwitterApi(process.env.BEARER)

const createTweet = async (album) => {
  download(album.image, "image_album.png")
  const totalFileSize = fs.statSync("./image_album.png").size
  const mediaId = await userClient.v1.uploadMedia("./image_album.png", {total_size: totalFileSize})
  await userClient.v2.tweet({
    text: "Hello world",
    media: {
      media_ids: [mediaId]
    }
  })
}

module.exports = createTweet

