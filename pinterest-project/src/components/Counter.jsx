import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counterSlice';

const Counter = () => {
    const {value} = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <p>{value}</p>
        <button onClick={()=> dispatch(increment())} >Increment</button>
        <button onClick={()=> dispatch(decrement())} >Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 10</button>
    </div>
  )
}

export default Counter
