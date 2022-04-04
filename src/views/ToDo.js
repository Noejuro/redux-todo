import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todo";
import ToDoList from "../components/ToDoList";

export default function ToDo() {
    const dispatch  = useDispatch()

    const [todo, setTodo] = useState("")

    const handleCreateTodo = () => {
        dispatch(createTodo(todo))
        setTodo("");
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter')
            handleCreateTodo();
    }

    return(
        <>
            <h1 className="pb-3"> TODO List </h1>
            <div className="card" style={{maxWidth: "400px", width: "100%", margin: "0 auto"}}>
                <div className="card-body">
                    <input type="text" placeholder="Add To Do" value={todo} 
                        onChange={(ev) => setTodo(ev.target.value)} onKeyDown={handleKeyDown} />

                    <button onClick={handleCreateTodo}> Add Item </button>
                    
                    <ToDoList />
                </div>
            </div>
        </>
    )
} 