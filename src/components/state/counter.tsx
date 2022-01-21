import { count } from 'console'
import { useReducer } from 'react'

type CounterState = {
  count: number
}

type CounterAction = {
  //type을 string으로 주면 CounterAction을 사용하는 곳에서 type을 incremetn나 decrement가 아닌
  //up과 같이 관련 없는 string으로 줘도 에러가 발생하지 않는다.
  //type을 Union으로 명시하는 편이 좋다.
  type: 'increment' | 'decrement' | 'reset'
  payload: number
}

const initialState = {
  count: 0,
}

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      // return { count: state.count = 0}
      return initialState
    default:
      return state
  }
}

export const Counter = () => {
  /*
  (alias) useReducer<(state: any, action: any) 
  => any>(reducer: (state: any, action: any) 
  => any, initialState: any, initializer?: undefined): 
  [any, React.Dispatch<any>] (+4 overloads) 
  */
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
    </>
  )
}
