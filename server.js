import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import PokemonsRouter from "./routes/pokemons.routes.js";
import { RandomNumber } from "./utils/RandomNumber.js";

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cors
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.get("/", (req, res) => res.json(RandomNumber().toString()));
app.use("/pokemons", PokemonsRouter);

// Launch the server
const PORT = process.env.PORT;
server.listen(process.env.PORT, () => {
  console.log("Le serveur a démarré au port " + PORT);
});
