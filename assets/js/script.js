fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {
        var pokemons = [];
        allpokemon.results.map((val) => {

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    pokemonSingle.sprites.front_default
                    pokemons.push({
                        name: val.name,
                        id: pokemonSingle.id,
                        types: pokemonSingle.types.map(type => type.type.name),
                        image: pokemonSingle.sprites.front_default ? pokemonSingle.sprites.front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    })
                    if (pokemons.length == 10) {
                        var pokemonBoxes = document.querySelector('.pokemon-boxes');
                        pokemonBoxes.innerHTML = '';
                        pokemons.map((val) => {
                            pokemonBoxes.innerHTML += `
                                        <div class="pokemon-box">
                                            <img src="`+ val.image + `" alt="Pokeball" class="pokeball">
                                            <div class="pokemon-info">
                                                <h3 class="pokemon-name">`+ val.name + `</h3>
                                                <p class="pokemon-id">#` + val.id + `</p>
                                                <div class="pokemon-types">
                                                    <span class="type">` + val.types.join(', ') + `</span>
                                                </div>
                                            </div>
                                        </div>
                                    `
                        })
                    }
                })
        })
    })