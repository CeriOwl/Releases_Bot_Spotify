const {getTokenSpotify} = require("./GetTokenSpotify")

async function getAlbums() {
    const URL = "https://api.spotify.com/v1/browse/new-releases?country=US&limit=40"
    return getTokenSpotify().then(token => {
        fetchData(token, URL)
    })

}

async function fetchData(token, URL) {
    return fetch(URL, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    }).then(data => data.json())
    .then(response => {
        const [...items] = response.albums.items
        const items_to_send = []
        items.forEach(item => {
            if(getDate() === item.release_date) {
                const album_data = new Object()
                album_data.name = item.name
                album_data.type = item.album_type
                album_data.image = item.images[0].url
                album_data.artists = getArtists(item.artists)
                items_to_send.push(album_data)
            }
        })
        return items_to_send
    })
}

function getArtists(artists) {
    let formated_text = ""
    if(artists.length === 1) {
        formated_text = artists[0].name
    }else {
        for(let i = 0; i < artists.length; i++) {
            if((i + 1) === (artists.length - 1)) {
                formated_text += `${artists[i].name} & `
            } else if (i === artists.length - 1) {
                formated_text += artists[i].name
            } else {
                formated_text += `${artists[i].name}, `
            }
        }
    }
    return formated_text
}

function getDate() {
    const date = new Date
    return date.toISOString().split("T")[0]
}

module.exports = { getAlbums }
