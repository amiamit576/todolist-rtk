import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state,action) => {
      console.log(state);
      // it  looklike  we  updating  same state  but
      // rtk  use  immerjs   that create  brand  new copy  object  before  mutation
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (action, state) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action Creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions;
// The function below is equivalent to combining all the reducers
// from all the slices with combineReducers
//your slice  is  combination state, reducer and action
export default todoSlice.reducer;