
import { useDispatch } from 'react-redux';
import './App.css';
import ToDo from './views/ToDo'
import { persistTodos } from './actions/todo'
import { useEffect } from 'react';
import Count from './views/Count';
import Pokemon from './views/Pokemon';

function App() {
  const dispatch  = useDispatch()

  useEffect(() => {
    dispatch(persistTodos());
  }, [])

  return (
    <div className="App p-5">
      <ToDo />
      <Count />
      <Pokemon />
    </div>
  );
}

export default App;
