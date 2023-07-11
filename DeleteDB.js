const db = require("./ConnectionDB")

const deleteData = async () => {
    const songs = db.collection("songs-of-the-day")
    const query = songs.where("album_name", "!=", "")
    const all = await query.get()
    all.forEach(async doc => {
        doc.ref.delete()
        console.log(doc.data())
    })
}

deleteData()
