
const pokemonDiv = document.getElementById('pokedex');


var pokeSearch = 1


function loadPokemon(){
    pokeApi.getPokemon(pokeSearch).then((pokemon) => {
        pokemonDiv.innerHTML += `
        <img class="pokemonImg" src="${pokemon.photo}" alt="pokemon photo">
            <div class="pokemonType">
                ${pokemon.types.map((slot)=>`<span class="${slot}">${slot}</span>`).join(' ')}
            </div>
            <h5 id="pokemonName" class="pokemonName ${pokemon.type}">${pokemon.name}</h5>
            <div class="pokemonSearch">
                <input id="pokemonSearch" type="text" placeholder="Type id/name !!">
            </div>
            <div class="pokemonData">
                <ol class="pokemonStats">
                    <li>HP: <span>${pokemon.hp}</span></li>
                    <li>AT: <span>${pokemon.attack}</span></li>
                    <li>DF: <span>${pokemon.defense}</span></li>
                    <li>S.AT: <span>${pokemon.specialAttack}</span></li>
                    <li>S.DF: <span>${pokemon.specialDefense}</span></li>
                    <li>SPD: <span>${pokemon.speed}</span></li>
                </ol>
            </div>
        </div>
        <ol id="pokemonList" class="pokemonList">

        </ol>
        
        `
    })
}loadPokemon();