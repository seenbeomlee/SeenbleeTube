import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("combined"));

const middleware = (req, res, next) => {
    res.send('not happening');
}

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
