import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  artistInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  name: {
    color: colors.white,
  },

  artistImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
