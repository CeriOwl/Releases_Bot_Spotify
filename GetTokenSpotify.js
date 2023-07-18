require('dotenv').config({path: __dirname + "/.env"})

async function getTokenSpotify() {
    const URL = "https://accounts.spotify.com/api/token"
    return fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64")}`
        },
        body: "grant_type=client_credentials",
        json: true
    })
    .then(data => data.json())
    .then(response => response.access_token)
}

module.exports = { getTokenSpotify }
