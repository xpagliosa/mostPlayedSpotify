import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../../styles';

const styles = StyleSheet.create({

  listItem: {
    marginTop: metrics.baseMargin,
  },

  'listItem-first': {
    marginTop: 0,
  },

  artistListTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    width: metrics.screenWidth - 40,
  },

  artistListTitle: {
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    color: colors.white,
    padding: 10,
    paddingTop: 0,
  },

  emptyList: {
    color: colors.regular,
    fontSize: fonts.small,
    alignSelf: 'center',
  },
});

export default styles;
