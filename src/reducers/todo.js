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

            const newState = {...state, todos: state.todos.concat(newTodo)};

            localStorage.setItem("todos", JSON.stringify(newState))

            return newState;
        }
        
        case "REMOVE_TODO": {
            const { text } = payload;

            const newState = {...state, todos: state.todos.filter(todo => todo.text !== text)};

            localStorage.setItem("todos", JSON.stringify(newState))

            return newState;
        }

        case "PERSIST_TODOS": {
            const localTodos = JSON.parse(localStorage.getItem('todos'));

            if (!!localTodos)
                return {...state, ...localTodos}
            else 
                return state
        }

        default: 
            return state
    }
}