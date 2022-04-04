import axios from "axios";
import { loadAllPokemonInProgress, loadAllPokemonSuccess, loadAllPokemonFailure } from "../actions/pokemon"

export const loadAllPokemon = () => async (dispatch, getState) => {
    try {
        dispatch(loadAllPokemonInProgress());
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        
        dispatch(loadAllPokemonSuccess(response.data.results));
    } catch (error) {
        dispatch(loadAllPokemonFailure(error))
    }
}