import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../../../styles';

const styles = StyleSheet.create({
  trackList: {
    paddingBottom: 15,
    width: metrics.screenWidth - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  trackInfo: {
    marginLeft: 10,
    width: metrics.screenWidth - 130,
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

  play: {
    width: 30,
    height: 30,
  },

  playButton: {
    width: 30,
    height: 30,
  },

  rotate: {
    fontSize: fonts.bigger,
    color: colors.regular,
    transform: [{ rotate: '90deg'}],
  }
});

export default styles;