async function getPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        
        const pokemonInfo = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
        document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
    } catch (error) {
        document.getElementById('pokemonInfo').innerHTML = `<p>${error.message}</p>`;
    }
}
