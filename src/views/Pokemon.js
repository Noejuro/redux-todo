import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllPokemon } from '../thunks/pokemon'

export default function Pokemon() {

    const dispatch = useDispatch();
    const { pokemon, isLoading, isError } = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(loadAllPokemon());
      }, [])

    return(
        <>
            <h1 className='pt-5'> Pokemon </h1>
            {isLoading ?
                <h1> LOADING... </h1>
                :
                <div className="row ">
                    {pokemon.map(item => 
                        <div key={item.name} className="col-3">
                            { item.name }
                        </div>
                    )}
                    
                </div>
            }
            {isError && <h1> Try again later! </h1>}
        </>
    )
}