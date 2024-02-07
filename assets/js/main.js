const limit = 5;
let offset = 0;
const pokemonList = document.getElementById('pokemonList');


function loadPokemon(offset,limit){
    pokeApi.getPokemon(offset,limit).then((pokemons = [])=>{
        pokemonList.innerHTML += pokemons.map((pokemon) =>`
        <li class="pokemon ${pokemon.type}" >
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span> 
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((slot)=> `<li class="type ${slot}">${slot}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.photo} alt="${pokemon.name}">
                </div>
                
                </li>
            `).join('')
    })
}loadPokemon();