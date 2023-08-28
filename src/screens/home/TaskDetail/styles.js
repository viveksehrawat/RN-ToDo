import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  priorityButton: {
    backgroundColor: colors.pink,
    width: '25%',
    height: 30,
    // marginRight: '5%',
  },
  priorityButtonTitle: {
    fontSize: 12,
  },
  highPriorityButton: {
    backgroundColor: colors.red,
  },
  mediumPriorityButton: {
    backgroundColor: colors.yellow,
  },
  lowPriorityButton: {
    backgroundColor: colors.green,
  },
  subtasksContainer: {
    marginTop: 16,
  },
  subTaskView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  subtaskButton: {
    width: '30%',
    height: 30,
  },
  subtaskTitleButton: {
    fontSize: 12,
  },
  inputContainer: {
    marginTop: 20,
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
    backgroundColor: 'white',
  },
  addTaskButton: {
    backgroundColor: colors.pink,
    width: '45%',
    marginRight: '5%',
  },
  clearTaskButton: {
    backgroundColor: colors.grey,
    width: '45%',
    marginLeft: '5%',
  },
});
