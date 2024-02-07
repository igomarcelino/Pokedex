const pokeApi = {}





pokeApi.getPokemon = (offset=0, limit=5)=>{
    const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(urlApi).then((responseUrl )=> responseUrl.json())
                        .then((jsonBody) => jsonBody.results)
                        .then((pokemonUrl) => pokemonUrl.map(pokeApi.getPokemonsDetails))
                        .then((pokemonData) => Promise.all(pokemonData))
                        .then((pokemonDetail) => pokemonDetail);
}



function convertPokeApiDetail(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.order = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((pokeTypeSlot) => pokeTypeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    const stats = pokeDetail.stats.map((att) => att.base_stat);
    pokemon.hp = stats[0];
    pokemon.attack=stats[1];
    pokemon.defense = stats[2];
    pokemon.specialAttack=stats[3];
    pokemon.specialDefense=stats[4];
    pokemon.speed=stats[5];
    const somar = (y,x)=>y+x;
    const total = stats.reduce(somar);
    pokemon.total = total;
    return pokemon;
}

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((responseUrl) => responseUrl.json())
    .then(convertPokeApiDetail);
}