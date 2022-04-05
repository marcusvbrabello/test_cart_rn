import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../pages/Cart';

const Stack = createNativeStackNavigator();

const optionsScreen = {
  headerTitleAlign: 'center',
  title: 'Meu carrinho',
  headerTitleStyle: {
    fontFamily: 'Poppins-Bold',
  },
  headerStyle: {
    backgroundColor: '#FFF',
  }
};

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="cart" 
          component={Cart}
          options={optionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}