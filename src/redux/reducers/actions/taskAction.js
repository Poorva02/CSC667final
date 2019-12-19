import axios from 'axios';

const setTasks = tasks => ({
  type: 'TASKS_SET_TASKS',
  tasks,
});

export const listTasks = () => (dispatch, getState) => {
  axios.get('/list')
    .then((res) => dispatch(setTasks(res.data)))
    .catch(console.log);
};

export const setNewTask = newTask =>({
  type: 'TASKS_SET_NEW_TASK',
  newTask,
});


export const setUpdateTask = updateTask =>({
    type: 'TASKS_SET_UPDATE_TASK',
    updateTask,
  });