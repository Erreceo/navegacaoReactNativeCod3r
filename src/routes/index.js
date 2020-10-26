import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../routes/Stack';

export default () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
);
