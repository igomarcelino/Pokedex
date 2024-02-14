
const pokemonName = document.getElementById('pokemonName')
const pokemonImg = document.getElementById('pokemonImg')
const pokemonHp = document.getElementById('hp')
const pokemonAt = document.getElementById('at')
const pokemonDf = document.getElementById('df')
const pokemonSat = document.getElementById('sat')
const pokemonSdf = document.getElementById('sdf')
const pokemonSpd = document.getElementById('spd')
const formPokemon = document.getElementById('pokemonForm')
const pokemonInput = document.getElementById('pokemonSearch')
const pokemonColor = document.getElementById('pokemonColor')
const pokemonTotal = document.getElementById('pokemonTotal')

function loadPokemon(pokeSearch){
    pokeApi.getPokemon(pokeSearch).then((pokemon) => {
        pokemonColor.classList.replace(pokemonColor.classList.value,`${pokemon.type}`)
        pokemonName.innerHTML = pokemon.name;
        pokemonName.classList.replace(pokemonColor.classList.value,`${pokemon.type}`);
        pokemonImg.src = pokemon.photo;
        pokemonHp.innerHTML = pokemon.hp;    
        pokemonAt.innerHTML = pokemon.attack;
        pokemonDf.innerHTML = pokemon.defense;
        pokemonSat.innerHTML = pokemon.specialAttack;
        pokemonSdf.innerHTML = pokemon.specialDefense;
        pokemonSpd.innerHTML = pokemon.speed;
        pokemonTotal.innerHTML = pokemon.total   
        
    })
}

formPokemon.addEventListener('submit',(event)=>{
    event.preventDefault();
    loadPokemon(pokemonInput.value)
})



