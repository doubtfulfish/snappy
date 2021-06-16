import * as React from 'react';
import { Text, View , TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import ChannelsScreen from './screens/ChannelsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import MoreScreen from './screens/MoreScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Projects') {
              iconName = 'list';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'user' : 'user-o';
            } else if (route.name === 'Channels') {
              return (<MaterialCommunityIcons name="message-reply" size={24} color="black" />);
            } else if (route.name === 'More') {
              return <Feather name="more-horizontal" size={24} color="black" />;
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        }}
        lazy='false'
        initialRouteName='Home'
      >
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        
        {/* <Tab.Screen name="Channels" component={ChannelsScreen} />
        <Tab.Screen name="More" component={MoreScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
)}




