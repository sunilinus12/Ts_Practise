import { useReducer } from "react"
import { CounterAction, CounterInitialProps } from "../interfaces"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store";
import { decrement, increment } from "../redux/reducers/CounterReducer";

const useCounterViewModel = () => {

    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return {
        handleDecrement,
        handleIncrement,
        value: counter.value
    }

}
export default useCounterViewModel