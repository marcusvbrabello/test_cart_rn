import { StyleSheet, Dimensions } from 'react-native';

const heightWindow = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 5,
      margin: 10
    },
    viewItem: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 2,
      marginBottom: 2,
      alignItems: 'center'
    },
    viewImg: {
      borderWidth: 1,
      borderColor: '#CCC',
      flex: 2,
      marginTop: 3,
      marginBottom: 3,
    },
    img: {
      width: (heightWindow/2) * 0.3,
      height: (heightWindow/2) * 0.3,
      borderWidth: 1,
    },
    viewInfo: {
      flex: 4.5,
      marginLeft: 10
    },
    txtName: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18
    },
    txtPrice: {
      fontFamily: 'Poppins-Regular',
      fontSize: 10,
      marginTop: 10
    },
    txtSellerPrice: {
      fontFamily: 'Poppins-Bold',
      fontSize: 14
    }
});