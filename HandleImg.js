const download = require("./DownloadImage");
const fs = require("fs")
const { getDataFile } = require("./getDataFile")

const handleImages = async () => {
    getDataFile((err, json_data) => {
        for(let data of json_data) {
            download(data.image, `./cover_images/${data.id}.png`)
        }
    })
}

module.exports = handleImages
