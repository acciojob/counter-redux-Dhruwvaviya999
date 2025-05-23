import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../counterSlice";


function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  )
}

export default App
