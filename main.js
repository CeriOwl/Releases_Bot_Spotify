const activateServer = require("./ConnectionHost")
const download = require("./DownloadImage")
const { getAlbums } = require("./GetReleases")
const createTweet = require("./createTweet")

const tweet = async () => {
    const albums = await getAlbums().then(data => data)
    //download(albums[1].image, "image_album.png")
    createTweet(albums[1])
}

tweet()
