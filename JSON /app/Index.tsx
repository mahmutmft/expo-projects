import { View, Text } from 'react-native';
import React from 'react';
import Cards from '../components/Cards';
export default function Index() {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
        }}
      >
        Learning Arrays
      </Text>
      <Cards />
    </View>
  );
}
