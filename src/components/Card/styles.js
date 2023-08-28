import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,

    borderRadius: 8,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container: {
    flexDirection: 'row',
  },
  textGroup: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  subtitle: {
    marginTop: 10,
    color: colors.grey,
    fontSize: 12,
    fontWeight: '900',
  },
});
