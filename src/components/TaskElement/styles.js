import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
  },
  input: {
    width: '100%',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700',
  },
  title: {
    color: colors.pink,
    fontSize: 15,
    fontWeight: '700',
    padding: 10,
  },
  descriptionInput: {
    height: 120,
  },
  icon: {
    color: colors.pink,
    fontSize: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priorityButton: {
    height: 20,
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
});
