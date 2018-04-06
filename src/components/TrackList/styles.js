import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../styles';

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

// import { StyleSheet } from 'react-native';
// import { general, metrics, colors, fonts } from '../../styles';

// const styles = StyleSheet.create({
//   ...general,

//   trackList: {
//     paddingHorizontal: 20,
//     paddingVertical: 5,
//     backgroundColor: 'rgba(27,27,27,.9)',
//   },

//   trackListTitleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 0,
//     width: metrics.screenWidth - 40,
//   },

//   trackListTitle: {
//     fontSize: fonts.bigger,
//     fontWeight: 'bold',
//     color: colors.white,
//     padding: 10,
//   },

//   emptyList: {
//     color: colors.regular,
//     fontSize: fonts.small,
//     alignSelf: 'center',
//   },
// });

// export default styles;