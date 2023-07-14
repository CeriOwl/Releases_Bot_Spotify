const fs = require("fs")
const https = require("https")

const download = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const localPath = fs.createWriteStream(filepath)
        https.get(url, response => {
            response.pipe(localPath)
            response.on("end", () => {
                localPath.end()
                resolve()
            })
            response.on("error", err => {
                fs.unlink(filepath, () => {
                    reject(err)
                })
            })
        })
    })
}

module.exports = download
