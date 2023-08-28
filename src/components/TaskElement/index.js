import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity, Modal} from 'react-native';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CalendarComponent} from '../Calendar';
import moment from 'moment';
import Button from '../Button';
import {colors} from '../../utils/colors';

const TaskElement = ({
  heading,
  isPassword,
  onChangeText,
  placeholder,
  style,
  description,
  isCalender,
  onCalendarPress,
  priority,
  onChangePriority,
  date,
  ...props
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State for controlling the modal visibility
  const [selectedDate, setSelectedDate] = useState('');
  useEffect(() => {
    setSelectedDate(date || '');
  }, [date]);

  const formattedDate =
    selectedDate !== ''
      ? moment(selectedDate).format('MMMM D, YYYY')
      : moment().format('MMMM D, YYYY');

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  let inputContent;

  switch (true) {
    case description:
      inputContent = (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[styles.input, styles.descriptionInput, styles.textStyle]}
          multiline={true}
          numberOfLines={5}
          {...props}
        />
      );
      break;

    case priority:
      inputContent = (
        <View style={styles.priorityContainer}>
          <Button
            backgroundColor={colors.red}
            width="25%"
            height={30}
            title="High"
            onPress={() => onChangePriority('High')}
          />
          <Button
            containerStyle={style.priorityButton}
            backgroundColor={colors.yellow}
            width="25%"
            height={30}
            title="Medium"
            onPress={() => onChangePriority('Medium')}
          />
          <Button
            backgroundColor={colors.green}
            width="25%"
            height={30}
            title="Low"
            fontSize={5}
            onPress={() => onChangePriority('Low')}
          />
        </View>
      );
      break;

    case isCalender:
      inputContent = (
        <TouchableOpacity
          onPress={openModal}
          style={[styles.input, styles.buttonContainer]}>
          <Text style={styles.textStyle}>{formattedDate}</Text>
          <MaterialIcons name="calendar-month" style={styles.icon} />
        </TouchableOpacity>
      );
      break;

    default:
      inputContent = (
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPassword}
          onChangeText={onChangeText}
          style={[styles.input, styles.textStyle]}
          {...props}
        />
      );
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.title}>{heading}</Text>
      {inputContent}
      {/* Modal to display the calendar */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CalendarComponent
              isVisible={isModalVisible}
              selectedDate={selectedDate}
              onDaySelect={date => {
                setSelectedDate(date);
                onCalendarPress(date);
                closeModal();
              }}
              onClose={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(TaskElement);
