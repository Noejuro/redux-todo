
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ToDo from './views/ToDo'
import { addCount, subtractCount } from './actions/count'

function App() {
  const dispatch  = useDispatch()
  const { count } = useSelector(state => state.count)

  return (
    <div className="App p-5">
      <ToDo />
      <h3> { count } </h3>
      <button onClick={() => dispatch(subtractCount())}> - </button>
      <button onClick={() => dispatch(addCount())}> + </button>
    </div>
  );
}

export default App;
