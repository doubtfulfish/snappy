import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function channelsmain({ navigation }) {
  return (
    <View>
      <Header
      style={StyleSheet.header}
      leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text>Events!</Text>
      <Button 
        title="You've Won $$!! Click to receive!" 
        onPress={ () => navigation.navigate('bruh')}
      />
    </View>
  );
}

function chat() {
  return <Text>u dumb dumb</Text>
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={channelsmain} />
      <Stack.Screen name='bruh' title='ok' component={chat} />
    </Stack.Navigator>
  );
}