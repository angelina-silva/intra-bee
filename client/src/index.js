require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan());
app.use(express.json());


app.listen(PORT, () => console.log("Servidor rodando na porta: " + PORT));