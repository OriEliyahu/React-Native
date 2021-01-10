import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flexDirection: 'row', height: 300, width: '100%', justifyContent: 'space-around', alignItems: 'stretch' }}>
      <View style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>1</Text>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>2</Text>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

