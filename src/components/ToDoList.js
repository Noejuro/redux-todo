import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../actions/todo";

export default function ToDoList() {
    const dispatch  = useDispatch()
    const { todos } = useSelector(state => state.todos)

    const handleRemoveTodo = (text) => { dispatch(removeTodo(text)) }

    return(
        <>
            {todos.map((todo, index) => 
                <div key={index} className="d-flex flex-row justify-content-between ">
                    <h3> { todo.text } </h3> 
                    <span onClick={() => handleRemoveTodo(todo.text)} className="material-icons" style={{color: "#C70000", cursor: "pointer"}}> delete </span>
                </div>
            )}
        </>
    )
} 