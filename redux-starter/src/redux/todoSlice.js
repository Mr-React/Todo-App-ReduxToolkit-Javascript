import { createSlice } from "@reduxjs/toolkit";

let oldinitialState = [
  {
    title: "React",
    todoId: 1,
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        todoId: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.todoId != action.payload.todoId);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
