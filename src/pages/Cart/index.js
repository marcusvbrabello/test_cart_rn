import React from 'react';
import { SafeAreaView } from 'react-native';

import { over } from '../../static/over-ten';
import { under } from '../../static/under-ten';
import { styles } from './styles';

import List from '../../components/List';
import TotalPrice from '../../components/TotalPrice';
import DoneBtn from '../../components/DoneBtn';

function renderList(){
    return <List items={over.items}/>;
}

function renderTotalPrice(){
    return <TotalPrice total={over.value}/>;
}

function renderDoneBtn(){
    return <DoneBtn />;
}

export default function Cart(){
  return (
      <SafeAreaView style={styles.container}>
        {renderList()}
        {renderTotalPrice()}
        {renderDoneBtn()}
      </SafeAreaView>
  );
}