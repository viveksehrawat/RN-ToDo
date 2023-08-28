import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  flatList: {
    padding: 25,
  },

  horizontalListContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
  },
  horizontalFlatList: {},

  footer: {
    height: 80,
    backgroundColor: colors.white,
    alignItems: 'center',
    width: '100%',
  },
  createTaskButton: {
    backgroundColor: colors.blue,
    color: colors.pink,
    width: '50%',
  },
});
