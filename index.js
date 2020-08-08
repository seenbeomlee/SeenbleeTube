const express = require('express')
const app = express()
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(request, response) {
    response.send('Hello from Home')
}

function handleProfile(request, response) {
    response.send("You are on my profile")
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);