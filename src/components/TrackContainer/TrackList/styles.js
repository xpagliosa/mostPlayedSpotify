import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from '../../../styles';

const styles = StyleSheet.create({
    trackList: {
        paddingHorizontal: 20,
        paddingVertical: 5,
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

    emptyList: {
        color: colors.regular,
        fontSize: fonts.small,
        alignSelf: 'center',
    },
})

export default styles;