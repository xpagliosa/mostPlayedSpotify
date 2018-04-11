import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../../../styles';

const styles = StyleSheet.create({
  trackList: {
    paddingBottom: 15,
    width: metrics.screenWidth - 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  trackInfo: {
    marginLeft: 10,
  },

  trackTitle: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  trackAlbum: {
    fontSize: fonts.smaller,
    color: colors.light,
  },
});

export default styles;