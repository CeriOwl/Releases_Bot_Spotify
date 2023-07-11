const activateServer = require("./ConnectionHost")
const { getAlbums } = require("./GetReleases")
const createTweet = require("./connectTwitter")

const tweet = async () => {
    const albums = await getAlbums().then(data => data)
    //console.log(albums[0])
    createTweet(albums[1])
}

tweet()
