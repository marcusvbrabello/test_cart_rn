import { StyleSheet, Dimensions } from 'react-native';

const heightWindow = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#CCC',
        maxHeight: (heightWindow/3) * 0.3,
    },
    btnContainer: {
        backgroundColor: '#3b74f2',
        color: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        maxHeight: (heightWindow/3) * 0.2,
        borderRadius: 5
    },
    txtBtn: {
        color: '#FFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 18
    }
})