const express = require("express");
const app = express();
const jsonData = require("./pokedex.json");
const cors = require("cors");
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get("/pokemon", (req, res) => {
    res.send(jsonData);
});

app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = jsonData.find((pokemon) => pokemon.id = id);
    res.send(pokemon);
});

app.get("/pokemon/:id/:info", (req, res) => {
    const id = req.params.id;
    const info = req.params.info;
    const pokemon = jsonData.find((pokemon) => pokemon.id = id);
    res.send(pokemon[info]);
});

app.listen(PORT, () => console.log("server listening on port 3000"));