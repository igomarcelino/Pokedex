const pokeApi = {}





pokeApi.getPokemon = (poke = 0)=>{
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${poke}`
    return fetch(urlApi).then((responseUrl )=> responseUrl.json())
                        .then((jsonBody) => convertPokeApiDetail(jsonBody))
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

