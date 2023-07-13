const download = require("./DownloadImage");
const { clientWrite } = require("./connectTwitter")

async function createTweet(album) {
    const mediaId = await clientWrite.v1.uploadMedia("./image_album.png", { mimeType: "png" })
    await clientWrite.v2.tweetThread([
        { text: `New ${album.type}\n\n${album.name} by ${album.artists}\n\n#spotify #music #release`, media: { media_ids: [mediaId] } }
    ]);

}

module.exports = createTweet
