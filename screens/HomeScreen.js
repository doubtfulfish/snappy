import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import CalendarScreen from './CalendarScreen';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Header
        containerStyle={styles.header}
        leftComponent={ () => {
          return (
            <TouchableOpacity
              onPress={() => console.log('bruh')}
            >
              <FontAwesome name='user' size='30px' color='white' />
            </TouchableOpacity>
          )
        }}
        centerComponent={{ text: 'Welcome, John', style: { color: '#fff', fontSize: 20} }}
        rightComponent={{ icon: 'gear', color: '#fff' }}
      >
      </Header>
      <View style={styles.blockscontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Calendar')}
          style={styles.buttonContainer}
        >
          <Text style={styles.text1}>Next on your calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('COVID')}
          style={styles.buttonContainer}
        >
          <Text style={styles.text1}>Covid Cases</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Projects')}
          style={styles.buttonContainer}
        >
          <Text style={styles.text1}>Your tasks for today:</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function COVIDScreen() {
  return (
    <View>
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            iconStyle: { color: '#fff' },
          }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <Text>
        COVID things, use a list func maybe to list all COVID cases of the
        company
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function Homestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="COVID" component={COVIDScreen} />
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
    backgroundColor: '#FFC107',
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
// import * as React from 'react';
// import { Text, View } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }
