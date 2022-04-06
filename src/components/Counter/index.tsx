import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import {
  selectCount,
  decrement,
  increment,
} from 'store/slices/counter/counterSlice'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const handleIncrease = () => {
    dispatch(increment())
  }

  const handleDecrease = () => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>

      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>
    </>
  )
}
