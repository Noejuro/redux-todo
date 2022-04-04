const initialState = {
    pokemon: [],
    isLoading: false,
    isError: false,
}


export const pokemon = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {

        case "LOAD_ALL_POKEMON_IN_PROGRESS": {
            return { ...state, isLoading: true, isError: false };
        }
        
        case "LOAD_ALL_POKEMON_SUCCESS": {
            const { pokemon } = payload;

            return { ...state, pokemon, isLoading: false };
        }

        case "LOAD_ALL_POKEMON_FAILURE": {
            const { error } = payload;

            console.log(error);

            return { ...state, isLoading: false, isError: true };
        }

        default: 
            return state
    }
}