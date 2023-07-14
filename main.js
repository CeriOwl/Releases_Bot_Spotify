const checkInDB = require("./CheckDataInDb")
const { getAlbums } = require("./GetReleases")
const handleImages = require("./HandleImg")
const fs = require("fs")

const nacionalities = [
    "US",
    "JP",
    "GB"
]

const handleAlbums = async () => {
    const data = await getAllData()
    const file_path = "./albums_data.json"
    const json_data = JSON.stringify(data, null, 2)
    fs.writeFile(file_path, json_data, err => {
        if(err) {
            console.log("Error saving the file: ", err)
        } else {
            console.log("No problem saving the file")
        }
    })
}

const getAllData = async () => {
    const albums = []
    for (let nationality of nacionalities) {
        const url = `https://api.spotify.com/v1/browse/new-releases?country=${nationality}&limit=50`
        const data = await getAlbums(url).then(data => data)
        if (data.length >= 1) {
            for (let album of data) {
                albums.push(album)
            }
        }
    }
    removeDuplicates(albums, ["name", "artists", "type"])
    return albums
}

function removeDuplicates(array, properties) {
    const duplicates = [];
    const uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        if (uniqueValues.some(obj => {
            return properties.every(prop => obj[prop] === currentItem[prop]);
        })) {
            duplicates.push(currentItem);
        } else {
            uniqueValues.push(currentItem);
        }
    }

    const result = array.filter(obj => duplicates.includes(obj));
    array.splice(0, array.length, ...uniqueValues);

    return result;
}

handleAlbums()
.then(() => handleImages()
.then(() => checkInDB()))
