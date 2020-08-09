import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)
}

const handleHome = (request, response) => {
    response.send('Hello from Home')
}

const handleProfile = (request, response) => {
    response.send("You are on my profile")
}

const betweenHome = (req, res, next) => {
    console.log("Between")
    next();
}

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
