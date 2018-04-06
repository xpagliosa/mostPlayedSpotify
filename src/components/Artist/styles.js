import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    artist: {
      alignItems: 'center',
      marginBottom: 10,
    },
  
    artistImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  
    artistName: {
      fontSize: fonts.bigger,
      fontWeight: 'bold',
      color: colors.white,
    },
  
    artistFollow: {
      fontSize: fonts.small,
      color: colors.regular,
    },
  });

  export default styles;