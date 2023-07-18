const { clientWrite } = require("./connectTwitter")

async function createTweetTest() {

    await clientWrite.v2.tweetThread([
        { text: `Just a test` }
    ]);
}

module.exports = createTweetTest
