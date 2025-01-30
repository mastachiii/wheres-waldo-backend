const express = require("express");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello Express"));

// Error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.send(err);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
