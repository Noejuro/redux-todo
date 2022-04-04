export const getPokemon = () => ({
    type: "GET_ALL_POKEMON"
})

export const loadAllPokemonInProgress = () => ({
    type: "LOAD_ALL_POKEMON_IN_PROGRESS"
});

export const loadAllPokemonSuccess = pokemon => ({
    type: "LOAD_ALL_POKEMON_SUCCESS",
    payload: { pokemon }
});

export const loadAllPokemonFailure = error => ({
    type: "LOAD_ALL_POKEMON_FAILURE",
    payload: { error }
});