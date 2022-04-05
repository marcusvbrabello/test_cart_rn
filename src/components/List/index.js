import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from './styles';

function maskPrice(priceInitial){
  var finalPrice = '';

  if(typeof priceInitial === 'string'){
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
  }else{
    return false;
  }
}

export default function List(props){
  return (
      <View style={styles.container} >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        {props.items.map((val) => {
          return (
            <View style={styles.viewItem} key={val.uniqueId}>
                <View style={styles.viewImg}>
                  <Image style={styles.img} source={{uri: val.imageUrl}} />
                </View>
                <View style={styles.viewInfo}>
                  <Text style={styles.txtName}>{val.name}</Text>
                  <Text style={styles.txtPrice}>{maskPrice(val.price.toString())}</Text>
                  <Text style={styles.txtSellerPrice}>{maskPrice(val.sellingPrice.toString())}</Text>
                </View>
            </View>
          );
        })}
        </ScrollView>
      </View>
  );
}

