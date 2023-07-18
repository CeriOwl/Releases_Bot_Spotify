const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

const activateServer = () => {
    app.get("/", (req, res) => {
        res.send("Hello World")
    })
    app.listen(PORT, () => {
        console.log("Listening in port: " + PORT)
    })
}

module.exports = { activateServer }
