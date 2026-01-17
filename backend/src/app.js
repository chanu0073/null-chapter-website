import express from "express"
import cors from "cors"

const app = express();

// basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get("/", (req, res) => {
    res.send("hello world");
});

export default app;