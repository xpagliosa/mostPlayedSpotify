import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
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
})

export default styles;