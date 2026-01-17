import express from "express"

const app = express();

// basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("hello world");
});

export default app;