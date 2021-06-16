import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import CalendarScreen from './CalendarScreen';

function HomeScreen({ navigation }) {
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
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.blockscontainer}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Calendar')}
          style={styles.buttonContainer}
        >
          <ImageBackground
            source={require('../assets/clock-lamp-and-plant.png')}
            style={styles.bgimage}
          >
            <View style={styles.container}>
              <Text style={styles.text1}>Next on your calendar</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('COVID')}
          style={styles.buttonContainer}
        >
          <ImageBackground
            source={require('../assets/vaccine.jpg')}
            style={styles.bgimage}
          >
            <View style={styles.container}>
              <Text style={styles.text1}>Covid Cases</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Projects')}
          style={styles.buttonContainer}
        >
          <ImageBackground
            source={require('../assets/notebook.jpg')}
            style={styles.bgimage}
          >
            <View style={styles.container}>
              <Text style={styles.text1}>Your tasks for today:</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function COVIDScreen({ navigation }) {
  return (
    <View>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.blockscontainer}
      >
        <TouchableOpacity onPress={COVIDtracker} style={styles.buttonContainer}>
          <ImageBackground
            source={require('../assets/tracetogether.png')}
            style={styles.bgimage}
          >
            <View
              style={[
                styles.container,
                { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
              ]}
            >
              <Text style={styles.text1}>Sync to trace together:</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('COVID2')}
          style={styles.buttonContainer}
        >
          <ImageBackground
            source={require('../assets/tracetogether.png')}
            style={styles.bgimage}
          >
            <View
              style={[
                styles.container,
                { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
              ]}
            >
              <Text style={styles.text1}>Record of Contact Tracing</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function COVIDScreen2({ navigation }) {
  return (
    <View>
      <Image
        source={require('../assets/Contact_Tracing_Employee.png')}
        style={[styles.image, { marginBottom: 40 }]}
      ></Image>
    </View>
  );
}

function COVIDtracker() {
  var cases = 'You have been into contact with 0 cases';
  alert(cases);
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
      <Stack.Screen name="COVID2" component={COVIDScreen2} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    padding: 10,
    // resizeMode: 'contain',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  buttonContainer: {
    marginBottom: 20,
    width: '90%',
    backgroundColor: 'grey',
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  bgimage: {
    // resizeMode: 'contain',
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
  },

  scrollview: {
    paddingTop: '5%',
    marginBottom: 100,
    paddingBottom: 100,
  },

  header: {
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
    height: 100,
  },
});
