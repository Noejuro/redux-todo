
import { useDispatch } from 'react-redux';
import './App.css';
import ToDo from './views/ToDo'
import { persistTodos } from './actions/todo'
import { useEffect } from 'react';
import Count from './views/Count';

function App() {
  const dispatch  = useDispatch()

  useEffect(() => {
    dispatch(persistTodos());
  }, [])

  return (
    <div className="App p-5">
      <ToDo />
      <Count />
    </div>
  );
}

export default App;
