import * as React from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function EventsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>Events!</Text>
      <Button 
        title="You've Won $$!! Click to receive!" 
        onPress={ () => navigation.navigate('bruh')}
      />
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>u dumb dumb</Text>
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name='bruh' title='ok' component={EventsSecondScreen} />
    </Stack.Navigator>
  )
}