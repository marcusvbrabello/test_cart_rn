import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import FreeShip from '../FreeShip';

function maskPrice(priceInitial){
  var finalPrice = '';

  const splittedPrice = priceInitial.toString().split('');

  if(splittedPrice.length === 2){
    return 'R$0,'+priceInitial;
  }else{
    let index = splittedPrice.length - 2;
    splittedPrice.splice(index, 0, ",");
  }

  for (let index = 0; index < splittedPrice.length; index++) {
    finalPrice += splittedPrice[index];
  }

  return 'R$'+finalPrice;
}

export default function TotalPrice(props){
  return (
    <>
      <View style={styles.viewPrice}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>{maskPrice(props.total)}</Text>
      </View>

      {props.total > 1000 && <FreeShip />}
    </>
  );
}