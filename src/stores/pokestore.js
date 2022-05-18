import { writable } from "svelte/store";

export const pokemon = writable([]);
const path_url = "http://143.198.49.250:5050"
const pokemonDetails = {};
let loaded = false;
const fetchPokemon = async () => {
    const url = path_url+`/api/pokemon`;
    const res = await fetch(url)
    const data = await res.json()
    pokemon.set(data)
}
fetchPokemon()

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = path_url+`/api/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};