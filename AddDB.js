const db = require("./ConnectionDB")

const addToDb = (album_name, album_type, artists_name) => {
    const dbReference = db.collection("songs-of-the-day")
    dbReference.add({
        album_name: album_name,
        album_type: album_type,
        artists_name: artists_name
    })
}

module.exports = addToDb
