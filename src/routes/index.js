import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../routes/Stack';
import Tab from '../routes/Tabs';

export default () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  </SafeAreaView>
);
