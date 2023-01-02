import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../Features/Counter/counterSlice'

export function Counter() {
  const [add, setAdd] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <form>
        <div class="mb-3 container">
          <label for="exampleInputEmail1" class="form-label">Enter value</label>
          <input type="number" class="form-control w-50" id="exampleInputEmail1" onChange={(e) => setAdd(e.target.value)} aria-describedby="emailHelp" />
        </div>

        <button class="btn btn-primary" type='button' onClick={() => dispatch(incrementByAmount(Number(add)))}>Submit</button>
      </form>
    </div>
  )
}