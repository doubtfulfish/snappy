// import * as React from 'react';
// import { Text, View } from 'react-native';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

// export default function CalendarScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Calendar</Text>
//     </View>
//   );
// }

import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Calendar , Agenda , CalendarList } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({ selectedEndDate: date });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
  render() {
    const { selectedStartDate, selectedEndDate } = this.state;

    const minDate = new Date();
    const maxDate = new Date(2020, 6, 3);
    const StartDate = selectedStartDate ? selectedStartDate.toString() : '';
    const EndDate = selectedEndDate ? selectedEndDate.toString() : '';


  
    return (
      <View style={styles.container}>
        <Calendar
          onChange={(range) => console.log(range)}
          minDate={new Date(2020, 2, 28)}
          startDate={new Date(2020, 2, 27)}
          endDate={new Date(2020, 3, 2)}
          markingType={'period'}
          markedDates={{
            '2021-06-15': {marked: true, dotColor: '#50cebb'},
            '2021-06-16': {marked: true, dotColor: '#50cebb'},
            '2021-06-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
            '2021-06-22': {color: '#70d7c7', textColor: 'white'},
            '2021-06-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
            '2021-06-24': {color: '#70d7c7', textColor: 'white'},
            '2021-06-25': {endingDay: true, color: '#50cebb', textColor: 'white'},}}
          
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: '#a722e0',
              fontWeight: '300',
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: { fontWeight: '200' },
            weekColumnsContainerStyle: {},
            weekColumnStyle: { paddingVertical: 10 },
            weekColumnTextStyle: { color: '#000305', fontSize: 13 },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: { color: '#613a6b', fontWeight: '200', fontSize: 15 },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: { color: '#fc051e' },
            activeDayContainerStyle: { backgroundColor: '#d472f7' },
            activeDayTextStyle: { color: 'black' },
            nonTouchableLastMonthDayTextStyle: {},
          }}

        />
       
        
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          </View>
        </View>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcac',
    marginTop: 100,
  },
  buttonContainer: {
    marginBottom: 20,
    width: 40 * 2,
    height: 40,
    backgroundColor: '#FFC107',
    borderRadius: 20,
  },
}); 


