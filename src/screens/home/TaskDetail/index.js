import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BackButton from '../../../components/BackButton';
import {styles} from './styles';
import TaskElement from '../../../components/TaskElement';
import {colors} from '../../../utils/colors';
import Button from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {addTask, deleteTask, updateTask} from '../../../redux/taskSlice';
import {useFormData} from '../../../utils/useFormData';
import uuid from 'react-native-uuid';
import {
  STRINGS,
  ACTION_TYPES,
  formatDate,
  DEFAULT_FORM_VALUES,
} from '../../../utils/constants';
import NavigationHeader from '../../../components/NavigationHeader';

const subtasksReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_SUBTASK:
      return [
        ...state,
        {
          key: action.key,
          heading: STRINGS.ADD_NEW_SUBTASK,
          placeholder: STRINGS.ADD_NEW_SUBTASK,
          value: '',
        },
      ];
    case ACTION_TYPES.UPDATE_SUBTASK:
      return state.map(subtask =>
        subtask.key === action.key
          ? {...subtask, value: action.value}
          : subtask,
      );
    case ACTION_TYPES.SET_SUBTASKS:
      return action.subtasks.map((subtask, index) => ({
        key: index.toString(),
        heading: STRINGS.ADD_NEW_SUBTASK,
        placeholder: STRINGS.ADD_NEW_SUBTASK,
        value: subtask,
      }));
    case ACTION_TYPES.CLEAR_SUBTASKS:
      return [];
    default:
      return state;
  }
};

const TaskDetail = ({route, navigation}) => {
  const {todo} = route?.params || {};
  const [subtaskCounter, setSubtaskCounter] = useState(0);

  // Calculate the current date here
  const currentDate = new Date().toISOString().split('T')[0];

  const [formValues, handleFormValueChange, setFormValues] = useFormData({
    ...DEFAULT_FORM_VALUES,
    dueDate: currentDate, // Assign the calculated current date here
  });

  const [subtasks, dispatchSubtasks] = useReducer(subtasksReducer, []);

  useEffect(() => {
    if (todo) {
      setFormValues({
        mainTaskName: todo.mainTaskName,
        priority: todo.priority,
        subtasks: [],
        taskDesc: todo.taskDesc,
        dueDate: todo.dueDate,
        defaultSubTask: todo.defaultSubTask,
      });
      setSubtaskCounter(todo.subtasks.length); // Set the subtaskCounter to the number of existing subtasks
      dispatchSubtasks({
        type: ACTION_TYPES.SET_SUBTASKS,
        subtasks: todo.subtasks,
      });
    } else {
      setFormValues({
        mainTaskName: '',
        priority: '',
        subtasks: [],
        taskDesc: '',
        dueDate: currentDate,
        defaultSubTask: '',
      });
      setSubtaskCounter(0); // Reset the subtaskCounter for new task creation
      dispatchSubtasks({type: ACTION_TYPES.CLEAR_SUBTASKS}); // Clear any default subtasks
    }
  }, [todo, setFormValues, currentDate]);
  const dispatch = useDispatch();

  const onBack = () => {
    navigation.goBack();
  };

  const handleCalendarPress = selectedDate => {
    handleFormValueChange('dueDate', selectedDate);
  };

  const handleUpdateTask = () => {
    if (validateForm()) {
      // Create a new updatedTask object with the latest form values and the same id
      const updatedTask = {
        id: todo.id, // Use the id from the original todo
        mainTaskName: formValues.mainTaskName,
        dueDate: formValues.dueDate,
        priority: formValues.priority,
        defaultSubTask: formValues.defaultSubTask,
        subtasks: subtasks.map(subtaskData => subtaskData.value),
        taskDesc: formValues.taskDesc,
      };

      dispatch(updateTask(updatedTask));
      onBack();
    }
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(todo));
    onBack();
  };

  const validateForm = () => {
    if (!formValues.mainTaskName) {
      Alert.alert(STRINGS.TASK_NAME_REQUIRED, STRINGS.ENTER_TASK_NAME, [
        {text: STRINGS.OK},
      ]);
      return false;
    }
    return true;
  };
  const createTask = () => {
    if (validateForm()) {
      const newTask = {
        id: uuid.v4(),
        mainTaskName: formValues.mainTaskName,
        dueDate: formValues.dueDate,
        priority: formValues.priority,
        defaultSubTask: formValues.defaultSubTask,
        subtasks: subtasks.map(subtaskData => subtaskData.value),
        taskDesc: formValues.taskDesc,
      };

      dispatch(addTask(newTask));
      onBack();
    }
  };

  const clearForm = () => {
    setFormValues({
      mainTaskName: '',
      priority: '',
      subtasks: [],
      taskDesc: '',
      dueDate: currentDate,
      defaultSubTask: '',
    });
    dispatchSubtasks({type: ACTION_TYPES.CLEAR_SUBTASKS}); // Clear existing subtasks
  };

  const handlePriorityChange = newPriority => {
    handleFormValueChange('priority', newPriority);
  };

  const addSubtaskInput = () => {
    const newSubtaskKey = subtaskCounter.toString();
    setSubtaskCounter(subtaskCounter + 1);
    dispatchSubtasks({type: ACTION_TYPES.ADD_SUBTASK, key: newSubtaskKey});
  };

  const handleSubtaskChange = (key, value) => {
    dispatchSubtasks({type: ACTION_TYPES.UPDATE_SUBTASK, key, value});
  };
  return (
    <View style={styles.container}>
      <NavigationHeader
        title={todo ? 'Your Task' : 'Create new task'}
        onBackPress={onBack}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
        style={{flex: 1}} // Add flex: 1 to ensure the view takes up the entire screen
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <TaskElement
            heading={STRINGS.MAIN_TASK_NAME}
            placeholder={STRINGS.MAIN_TASK_NAME}
            value={formValues.mainTaskName}
            onChangeText={text => handleFormValueChange('mainTaskName', text)}
            style={styles.inputContainer}
          />
          <TaskElement
            heading={STRINGS.DUE_DATE}
            isCalender={true}
            date={formValues.dueDate}
            onCalendarPress={selectedDate => handleCalendarPress(selectedDate)} // Pass the selected date correctly
            style={styles.inputContainer}
          />
          <TaskElement
            heading={STRINGS.PRIORITY}
            priority={true}
            onChangePriority={newPriority => handlePriorityChange(newPriority)} // Pass the callback function
            style={styles.inputContainer}
          />
          <TaskElement
            heading={STRINGS.ADD_NEW_SUBTASK}
            placeholder={STRINGS.ADD_NEW_SUBTASK}
            value={formValues.defaultSubTask}
            onChangeText={text => handleFormValueChange('defaultSubTask', text)} // Update this line
            style={styles.inputContainer}
          />
          {subtasks.map(subtaskData => (
            <TaskElement
              key={subtaskData.key}
              heading={subtaskData.heading}
              placeholder={subtaskData.placeholder}
              style={styles.inputContainer}
              value={subtaskData.value}
              onChangeText={text => handleSubtaskChange(subtaskData.key, text)} // Pass key and value to handleSubtaskChange
            />
          ))}
          <View style={styles.subTaskView}>
            <Button
              width="40%"
              height={30}
              title={STRINGS.ADD_SUBTASK}
              onPress={addSubtaskInput}
            />
          </View>
          <TaskElement
            heading={STRINGS.DESCRIPTION}
            placeholder={STRINGS.DESCRIPTION}
            description={true}
            value={formValues.taskDesc}
            onChangeText={text => handleFormValueChange('taskDesc', text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Button
          onPress={todo ? handleUpdateTask : createTask}
          containerStyle={styles.addTaskButton}
          titleStyle={{color: colors.white}}
          width="40%"
          title={todo ? STRINGS.UPDATE_TASK : STRINGS.ADD_TASK}
        />
        <Button
          onPress={todo ? handleDeleteTask : clearForm}
          width="40%"
          backgroundColor={colors.grey}
          title={todo ? STRINGS.DELETE : STRINGS.CLEAR}
        />
      </View>
    </View>
  );
};

export default TaskDetail;
