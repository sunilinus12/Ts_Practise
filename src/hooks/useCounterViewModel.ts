import { useReducer } from "react"
import { CounterAction, CounterInitialProps } from "../interfaces"



const reducer = (state: CounterInitialProps, action: CounterAction) => {
    switch (action.type) {
        case "DECREMENT":
            return { value: action.payload }
        case "INCREAMENT":
            return { value: action.payload }

        default:
            return state
    }
}

const initialState: CounterInitialProps = {
    value: 0
}

const useCounterViewModel = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleIncrement = () => {
        dispatch({ type: "INCREAMENT", payload: state.value + 1 })
    }
    const handleDecrement = () => {
        dispatch({ type: "INCREAMENT", payload: state.value - 1 })
    }
    return {
        handleDecrement,
        handleIncrement,
        ...state
    }

}
export default useCounterViewModel