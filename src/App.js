import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counter';



function App() {

  const count = useSelector((state) => state.counter);

  return (
    <div>
      <p>Score: {count}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
