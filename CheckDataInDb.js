const addToDb = require("./AddDB");
const getData = require("./GetDb");
const createTweet = require("./createTweet");
const { getDataFile } = require("./getDataFile");

const checkInDB = async () => {
    getDataFile(async (err, data_json) => {
        const all_data_db = await getData().then(data => data)
        for (const album of data_json) {
            if (!compare_data_and_db(album, all_data_db)) {
                createTweet(album)
                addToDb(album.name, album.type, album.artists)
            }
        }
    })
}

// Compare the data we received with the db
// Return true if the album is in the db, false if it is not
const compare_data_and_db = (album, data_db) => {
    let is_on_db = false
    data_db.forEach(element => {
        if (element.album_name === album.name && element.album_type === album.type && element.artists_name === album.artists) {
            is_on_db = true
        }
    })

    if (is_on_db) {
        return true
    } else {
        return false
    }
}

module.exports = { checkInDB }
