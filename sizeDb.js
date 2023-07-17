const db = require("./ConnectionDB")

const getSizeDB = async () => {
    const songs = db.collection("songs-of-the-day")
    const query = songs.where("album_name", "!=", "")
    const all = await query.get()
    return all.size
}

module.exports = { getSizeDB }
