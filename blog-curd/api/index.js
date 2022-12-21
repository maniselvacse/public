import cors from 'cors';
import express from "express";
import bodyParser from "body-parser";
import blogRoutes from "./src/routes/blog.routes.js";

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
app.use("/blog", blogRoutes);

// Another Routes
app.get("/", (req, res) => {
    res.status(401).send("Access denied.")
});
app.all("*", (req, res) => {
    res.status(404).send("Not Found.")
});

// Capture 500 errors
app.use((err, req, res, next) => {
    res.status(500).send('Server Error!');
})

app.listen(PORT, 'localhost', () => {
    console.log(`Server running on ${mode} Mode, Port: http://${host}:${PORT} `)
});