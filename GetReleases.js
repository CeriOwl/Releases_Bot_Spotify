const {getTokenSpotify} = require("./GetTokenSpotify")

function getAlbums() {
    const URL = "https://api.spotify.com/v1/browse/new-releases?country=US&limit=40"
    getTokenSpotify().then(token => {
        fetchData(token, URL)
    })

}

function fetchData(token, URL) {
    fetch(URL, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    }).then(data => data.json())
    .then(response => {
        const [...items] = response.albums.items
        const items_to_send = []
        items.forEach(item => {
            const album_data = new Object()
            album_data.name = item.name
            album_data.type = item.album_type
            album_data.image = item.images[0]
            album_data.artists = getArtists(item.artists)
        })
    })
}

function getArtists(artists) {
    let formated_text = ""
    if(artists.length === 1) {
        formated_text = artists[0].name
    }else {
        for(let i = 0; i < artists.length; i++) {
            if((i + 1) !== (artists.length - 1)) {
                formated_text = `${artists[i].name}, `
            } else {
                formated_text = `${artists[i]}`
            }
        }
    }
    console.log(formated_text)
}

function getDate() {
    const date = new Date
    return date.toISOString().split("T")[0]
}

getAlbums()
