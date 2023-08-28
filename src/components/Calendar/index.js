import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';
import {colors} from '../../utils/colors';

export const CalendarComponent = ({selectedDate, onDaySelect}) => {
  const markedDates = {
    [selectedDate]: {selected: true, selectedColor: colors.pink}, // Mark the selected date with pink color
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        markedDates={markedDates} // Mark the selected date
        current={selectedDate} // Set the currently selected date
        onDayPress={day => {
          onDaySelect(day.dateString);
        }}
      />
    </View>
  );
};
