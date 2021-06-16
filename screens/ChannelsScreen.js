import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Directions } from 'react-native-gesture-handler';

const people = [{name: 'John'}, 'Xiao Pee', 'HR']

function channelsmain({ navigation }) {
  const [people, setpeople] = useState(people);

  function renderItem({ person }) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat');
        }}
      >
        <View style={{'flex-direction': 'row',}}>
          <View>
            <FontAwesome name="user" size="30px" color="white" />
          </View>
          <View>
            <Text>{person}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <Header
        containerStyle={styles.header}
        leftComponent={() => {
          return (
            <TouchableOpacity onPress={() => console.log('bruh')}>
              <FontAwesome name="user" size="30px" color="white" />
            </TouchableOpacity>
          );
        }}
        centerComponent={{
          text: 'Welcome, John',
          style: { color: '#fff', fontSize: 20 },
        }}
        rightComponent={() => {
          return (
            <TouchableOpacity onPress={() => console.log('bruh')}>
              <FontAwesome name="gear" size="30px" color="white" />
            </TouchableOpacity>
          );
        }}
      ></Header>
      <FlatList
        style={{ width: '100%', height: '10%' }}
        data={people}
        renderItem={renderItem}
      />
    </View>
  );
}

function chat() {
  return <Text>u dumb dumb</Text>;
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat List"
        options={{ headerShown: false }}
        component={channelsmain}
      />
      <Stack.Screen name="Chat" component={chat} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: 'grey',
    borderRadius: 20,
  },

  text1: {
    //css uses colon instead of equals sign
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
  },

  blockscontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  header: {
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  },
});
