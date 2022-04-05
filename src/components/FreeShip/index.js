import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles';

export default function FreeShip(){
  return (
    <View style={styles.container}>
      <View style={styles.viewFreeShip}>
        <Text style={styles.textFreeShip}>Parabéns, sua compra tem frete grátis!</Text>
      </View>
    </View>
  );
}