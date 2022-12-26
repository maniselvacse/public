import cors from 'cors';
import express from "express";
import bodyParser from "body-parser";
import logger  from './src/utils/logger.js';
import profileRoutes from "./src/routes/profiles.routes.js";

const mode = process.env.NODE_ENV || 'development';
const host = "localhost";
const app = express();
const PORT = 3001;
const corsOptions = {
    origin: '*',
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE"
}

app.use(cors(corsOptions));
app.use(bodyParser.json()); //header => Content-Type:application/json

//User Profiles
app.use("/profile", profileRoutes);

// Another Routes
app.get("/", (req, res) => {
    logger.error(`401 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(401).send("Access denied.")
});
app.all("*", (req, res) => {
    logger.error(`400 || ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(404).send("Not Found.")
});

// Capture 500 errors
app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).send('Server Error!');
})

app.listen(PORT, 'localhost', () => {
    console.log(`Server running on ${mode} Mode, Port: http://${host}:${PORT} `)
    logger.info(`Server started and running on http://${host}:${PORT}`)
});