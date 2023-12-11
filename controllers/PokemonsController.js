import { pokemons } from "../data/data.js";

const readAllPokemons = async (req, res) => {
  try {
    res.json(pokemons);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Erreur lors de la récupération des données Pokémon");
  }
};

const readPokemon = async (req, res) => {
  try {
    const id = parseInt(req.params.pokemonID);
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      return res.status(404).send("Pokémon non trouvé");
    }
    res.json({
      name: pokemon.name,
      types: pokemon.types,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Erreur lors de la récupération des données Pokémon");
  }
};

const PokemonsController = {
  readAllPokemons,
  readPokemon,
};

export { PokemonsController };
