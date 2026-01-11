const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)

    const [type] = types

    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.order
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = async (pokemon) => {
    const response = await fetch(pokemon.url)
    const pokeDetail = await response.json()
    return convertPokeApiDetailToPokemon(pokeDetail)
}

pokeApi.getPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await fetch(url)
    const jsonBody = await response.json()
    const pokemons = jsonBody.results
    const detailRequest = pokemons.map(pokeApi.getPokemonDetail)
    const pokemonsDetails = await Promise.all(detailRequest)
    return pokemonsDetails
}