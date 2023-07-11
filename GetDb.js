const db = require("./ConnectionDB")

async function getData() {
    const songs = db.collection("songs-of-the-day")
    const all = await songs.get()
    all.forEach((doc) => console.log(doc.data().album_name))
}

getData()
