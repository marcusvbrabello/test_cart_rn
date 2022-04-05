import { StyleSheet, Dimensions } from 'react-native';

const heightWindow = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: (heightWindow/3) * 0.2,
    },
    viewFreeShip: {
        backgroundColor: '#abe78a',
        padding: 5,
        borderRadius: 15
    },
    textFreeShip: {
        fontFamily: 'Poppins-Bold',
        color: '#45951a'
    }
})