import { Platform, StyleSheet } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';
import general from './general';

const styles = StyleSheet.create({
    ...general,
  
    container: {
      flex: 1,
      backgroundColor: colors.darker,
    },
  
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    loading: {
      color: colors.white,
      fontSize: fonts.big
    },
  
    header: {
      height: (Platform.OS === 'ios') ? 30 : 10,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    headerText: {
      fontWeight: '500',
      color: colors.white,
    },
  
    trackList: {
      paddingHorizontal: 20,
      paddingVertical: 5,
      backgroundColor: 'rgba(27,27,27,.9)',
    },

    trackListTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      width: metrics.screenWidth - 40,
    },
  
    trackListTitle: {
      fontSize: fonts.bigger,
      fontWeight: 'bold',
      color: colors.white,
      padding: 10,
      paddingTop: 0,
    },
  
    searchContainer: {
      position: 'absolute',
      bottom: 56,
      width: metrics.screenWidth,
      maxHeight: (metrics.screenHeight / 2),
      backgroundColor: colors.dark,
      padding: metrics.baseMargin,
    },
  
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 56,
      backgroundColor: '#222327',
      paddingHorizontal: 20,
    },
  
    searchInput: {
      flex: 1,
      height: 26,
      fontSize: fonts.smaller,
      backgroundColor: colors.white,
      paddingHorizontal: metrics.smallMargin,
      borderRadius: 3,
      paddingVertical: 0,
    },
  
    emptyList: {
      color: colors.regular,
      fontSize: fonts.small,
      alignSelf: 'center',
    },
  
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      backgroundColor: colors.light,
      marginTop: metrics.smallMargin,
      padding: metrics.smallMargin,
    },
  
    buttonText: {
      fontWeight: 'bold',
      color: colors.darker,
      fontSize: fonts.regular,
    },
  
  });
  
  export { styles, colors, fonts, metrics, general };
