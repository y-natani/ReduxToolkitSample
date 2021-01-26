import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosGet } from 'src/helper'
import { Sample as StateType } from 'Store'

const STORE_NAME = 'list'

export const defaultVal: StateType = {
  id: '',
  result: null,
  isLoading: true,
}

const initialState: StateType = {
  ...defaultVal,
}

// useEffectなどでdispatch経由で呼び出す
export const getTodos: any = createAsyncThunk(
  `${STORE_NAME}/getTodos`,
  async (id: string) => axiosGet(`/todos/${id}`)
)

const State = createSlice({
  name: STORE_NAME,
  initialState,
  // API以外ではreducersを使用
  reducers: {
    setId: (state: StateType, { payload }) => ({ ...state, ...payload }),
  },
  // API関連はextraReducersを使うと Loading管理がしやすい
  // pendingでLoadingがtrue、fullfilledでLoadingがfalseになる
  extraReducers: ({ addCase }) => {
    addCase(getTodos.pending, () => ({ ...defaultVal })).addCase(
      getTodos.fulfilled,
      (state: StateType, { payload }: any) => {
        return { ...state, isLoading: false, result: { ...payload } }
      }
    )
  },
})

export default State.reducer

export const { setId } = State.actions
