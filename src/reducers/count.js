const initialState = {
    count: 0
}


export const count = (state = initialState, action) => {
    const { type } = action;

    switch(type) {
        case "ADD_COUNT": 
            return {...state, count: state.count + 1};
        
        case "SUBTRACT_COUNT": 
            return {...state, count: state.count - 1};        

        default: 
            return state
    }
}