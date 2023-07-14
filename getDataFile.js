const fs = require("fs")

const getDataFile = (callback) => {
    const file_path = "./albums_data.json"
    fs.readFile(file_path, "utf-8", (err, data) => {
        if(err) {
            console.log("Error reading the file: ", err)
            callback(err, null)
        } else {
            const json_data = JSON.parse(data)
            callback(null, json_data)
        }
    })
}

module.exports = { getDataFile }
