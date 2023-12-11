import express from "express";
import { PokemonsController } from "../controllers/PokemonsController.js";

const router = express.Router();

//pokemons
router.get("/", PokemonsController.readAllPokemons);
router.get("/:pokemonID", PokemonsController.readPokemon);

// ✅ export the router
export default router;
