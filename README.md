# Final Project

## 667/867
Implement a simple task tracker app
Task tracker app has the ability to create a task, and then mark it as complete.

No storage necessary, okay to store in local variables.

### Subtask 1
Implement a task tracking services which does the following:
- Post endpoint to submit a new task
- Post endpoint to mark an existing task as done
- Get endpoint to get current state of tasks

### Subtask 2
Implement a websocket service which broadcasts a message whenever a task has been updated

### Subtask 3
Implement redis pubsub between the tracking service and the websocket service.

### Subtask 4
Implement a front end that displays 2 lists, one for pending tasks, and one for completed.
Create an input with a button for submitting a new note. Pending tasks should have a button to mark them as complete.

### Subtask 5
Implement redux actions for fetching state, updating state, submitting new task, marking task complete.

### Starting apps
- `npm start`
- `node tasks.js`
- `node ws.js`
