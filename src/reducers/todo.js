const initialState = {
    todos: []
}


export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case "CREATE_TODO": {
            const { text } = payload;

            const newTodo = {
                text,
                isCompleted: false
            }

            return {...state, todos: state.todos.concat(newTodo)};
        }
        
        case "REMOVE_TODO": {
            const { text } = payload;

            const newTodo = {
                text,
                isCompleted: false
            }

            return {...state, todos: state.todos.concat(newTodo)};
        }

        default: 
            return state
    }
}