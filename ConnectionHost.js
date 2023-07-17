const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

const activateServer = () => {
    app.listen(PORT, () => {
        console.log("Listening in port: " + PORT)
    })
}

module.exports = { activateServer }
