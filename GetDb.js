const db = require("./ConnectionDB")

async function getData() {
    const songs = db.collection("songs-of-the-day")
    const all = await songs.get()
    const all_data_db = []
    all.forEach(doc => doc.data().album_name !== "" ? all_data_db.push(doc.data()) : "")
    return all_data_db
}

module.exports = getData
