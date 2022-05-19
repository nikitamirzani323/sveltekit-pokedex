<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("/api/pokemon")
        const pokemon = await res.json();
        return {
            props: {
                pokemon,
            }
        }
    };
</script>
<script>
    
    import PokemanCard from "../components/pokemanCard.svelte";
    export let pokemon
    let searchTerm = "";
    let filteredPokemon = [];

    $:{
        if(searchTerm){
            filteredPokemon = pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm))
        }else{
            filteredPokemon = [...pokemon]
        }
    }
</script>
<svelte:head>
    <title>POKEDEX</title>
</svelte:head>
<h1 class="text-4xl text-center uppercase my-8">Sveltekit Pokedex</h1>

<input 
    bind:value={searchTerm}
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200" 
    type="text" placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as rec}
        <PokemanCard pokeman={rec} />
    {/each}
</div>