const pokedex = document.getElementById('pokedex');
var allPokemonList = [];
const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            moves: result.moves,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        allPokemonList = pokemon;
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map((pokeman) => `
        <li class="card">
        <a id="${pokeman.id}" onclick="openPopup(${pokeman.id})" class="button" >
            <div>
                <img class="card-image" src="${pokeman.image}"/>
                <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                <p class="card-subtitle">Type: ${pokeman.type}</p>
            </div>
        </a>
        </li>`).join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const filterPokemon = (pokemonType) => {
    document.getElementById('dropbtn').innerText = pokemonType ? `${capitalizeFLetter(pokemonType)} ` : 'Explorar Todo';
    if (pokemonType) {
        var filterList = allPokemonList.filter((item) => {
            return item.type.includes(pokemonType);
        })
        const pokemonHTMLString = filterList.map((pokeman) => `
            <li class="card">
            <a id="${pokeman.id}" onclick="openPopup(${pokeman.id})" class="button" >
                <div>
                    <img class="card-image" src="${pokeman.image}"/>
                    <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                    <p class="card-subtitle">Type: ${pokeman.type}</p>
                </div>
            </a>
            </li>`).join('');
        pokedex.innerHTML = pokemonHTMLString;
    } else {
        const pokemonHTMLString = allPokemonList.map((pokeman) => `
        <li class="card">
        <a id="${pokeman.id}" onclick="openPopup(${pokeman.id})" class="button" >
            <div>
                <img class="card-image" src="${pokeman.image}"/>
                <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                <p class="card-subtitle">Type: ${pokeman.type}</p>
            </div>
        </a>
        </li>`).join('');
    pokedex.innerHTML = pokemonHTMLString;
    }
};

function capitalizeFLetter(param) { 
  return param[0].toUpperCase() + param.slice(1); 
}

function openPopup(id) {
    const currentPokemon = allPokemonList.filter((item) => id === item.id);
    document.getElementById(id).href = '#popup'
    document.getElementById('photo-heading').innerText = currentPokemon[0].name;
    document.getElementById('popup-ability').innerText = 'Abilities';
    document.getElementById('popup-photo').src = currentPokemon[0].image;
    const pokemonHTMLString = currentPokemon[0].moves.map((move) => `<li class="list"><div></div>${move.move.name}<div></div></li>`).join('');
    document.getElementById('ability-list').innerHTML = pokemonHTMLString;
}

function closePopup() {
    document.getElementById('popup-close').href = '#pokedex'
}

fetchPokemon();
