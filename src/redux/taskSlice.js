import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      const idToUpdate = updatedTask.id;

      const taskIndex = state.findIndex(task => task.id === idToUpdate);

      if (taskIndex !== -1) {
        let newState = [
          ...state.slice(0, taskIndex),
          updatedTask,
          ...state.slice(taskIndex + 1),
        ];
        return newState;
      }

      return state;
    },

    deleteTask: (state, action) => {
      const idToDelete = action.payload.id;
      const newState = state.filter(task => task.id !== idToDelete);

      return newState;
    },
  },
});

export const {addTask, updateTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
