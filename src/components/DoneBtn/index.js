import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export default function DoneBtn(props){
  return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnContainer}
        >
          <Text style={styles.txtBtn}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
  );
}