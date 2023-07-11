const fs = require("fs")
const https = require("https")

const download = async (url, filename) => {
    const file = fs.createWriteStream(filename)

    https.get(url, response => {
        response.pipe(file)
        file.on("finish", () => {
            file.close()
        }).on("error", error => {
            fs.unlink(filename)
        })
    } )
}

module.exports = download
