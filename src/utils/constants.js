import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD'; // Define your desired date format

export const STRINGS = {
  MAIN_TASK_NAME: 'Main task name',
  DUE_DATE: 'Due date',
  PRIORITY: 'Priority',
  ADD_NEW_SUBTASK: 'Add new subtask',
  DESCRIPTION: 'Description',
  ADD_SUBTASK: 'Add Sub-task',
  ADD_TASK: 'Add task',
  UPDATE_TASK: 'Update',
  CLEAR: 'Clear',
  DELETE: 'Delete',
  TASK_NAME_REQUIRED: 'Task Name Required',
  ENTER_TASK_NAME: 'Please enter a task name before submitting.',
};

export const ACTION_TYPES = {
  ADD_SUBTASK: 'ADD_SUBTASK',
  UPDATE_SUBTASK: 'UPDATE_SUBTASK',
  SET_SUBTASKS: 'SET_SUBTASKS',
  CLEAR_SUBTASKS: 'CLEAR_SUBTASKS',
};

export const formatDate = date => moment(date).format(DATE_FORMAT);

export const DEFAULT_FORM_VALUES = {
  mainTaskName: '',
  priority: '',
  subtasks: [],
  taskDesc: '',
  dueDate: '',
  defaultSubTask: '',
};
