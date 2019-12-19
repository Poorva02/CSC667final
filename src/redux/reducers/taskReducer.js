const INITIAL_STATE = {
  tasks: [],  
  newTask:'',
  updateTask:'',
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {    

      case 'TASKS_SET_NEW_TASK':
      return {
        ...state,
        newTask:action.newTask,
      };

      case 'TASKS_SET_UPDATE_TASK':
      return {
        ...state,
        updateTask:action.updateTask,
      };

  case 'TASKS_SET_TASKS':
    return {
      ...state,
      tasks:action.tasks,
    };
  default:
    return state;
  }
};

export default taskReducer;
