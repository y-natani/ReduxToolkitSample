import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from 'src/store/sample'
import { Sample, State } from 'Store'

export const Top = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodos('1'))
  }, [])

  const { sample = {} as Sample } = useSelector((state: State) => state)
  const request = () => {
    dispatch(getTodos('1'))
  }
  return (
    <div>
      <button onClick={() => request()}>Request</button>
      <p>LoadingStatus: {sample.isLoading ? 'Loading' : 'FINISH'}</p>
      <p>Result: {sample.result && JSON.stringify(sample.result)}</p>
    </div>
  )
}

export default Top
