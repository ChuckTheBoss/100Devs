const express = require("express");
const app = express();
const PORT = 8000;

const savage = {
    age: 29,
    birthname: "Shéyaa Bin Abraham-Joseph",
    location: "Plaistow, London, England"
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapperName", (req, res) => {
    console.log(req.params.rapperName)
    res.json(savage);
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})