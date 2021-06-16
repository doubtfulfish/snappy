import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function COVIDScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [displaytext, setDisplaytext] = useState('Sync to TraceTogether');

  function returnOK() {
    setLoading(true)
    setDisplaytext('No exposure alerts. Based on all your TraceTogether and SafeEntry records from the last 14 days.')
    setTimeout( () => setLoading(false), 3000);
  }

  // useEffect(() => {
  //   setLoading(true)
  // })

  return (
    <View>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.blockscontainer}
      >
        <TouchableOpacity
          onPress={ () => returnOK() }
          style={[styles.buttonContainer, { backgroundColor: 'lightyellow' }]}
        >
          <ImageBackground
            source={require('../assets/tracetogether.png')}
            style={styles.bgimage}
          >
            <View
              style={[
                styles.container,
                { backgroundColor: 'rgba(0, 0, 0, 0.3)', alignItems: 'center', justifyContent: 'center' },
              ]}
            >
              <Text style={styles.text1}>{ loading ? <ActivityIndicator size="large" color='white'/> : displaytext }</Text>
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
                { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
              ]}
            >
              <Text style={styles.text1}>Record of Contact Tracing</Text>
              <Text style={styles.text2}>1 team affected.</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    padding: 20,
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
    marginBottom: 20,
  },

  text2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },

  blockscontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollview: {
    paddingTop: '5%',
    marginBottom: 100,
    paddingBottom: 150,
  },

  header: {
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
    height: 100,
  },
});
