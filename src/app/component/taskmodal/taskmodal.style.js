import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center'
    },
    window: {
        marginLeft: 24,
        marginRight: 24,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonDrawer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default styles;