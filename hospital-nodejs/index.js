const express = require("express");
const app = express();

app.get("/test", function (req, res) {
    return res.send("Hello World");
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});

module.exports = app;