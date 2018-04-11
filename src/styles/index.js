import { Platform, StyleSheet } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';
import general from './general';

const styles = StyleSheet.create({
    ...general,
  
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.darker,
    },

    header: {
      height: (Platform.OS === 'ios') ? 30 : 10,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },

    artistContainer: {
      minHeight: 145,
      borderColor: 'yellow',
      borderWidth: 1
    },

    trackContainer: {
      maxHeight: metrics.screenHeight - 240,
    },

    searchContainer: {
      minHeight: 56
    },
  });
  
  export { styles, colors, fonts, metrics, general };
