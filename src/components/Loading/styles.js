import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loading: {
        color: colors.white,
        fontSize: fonts.big
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
      
})

export default styles;