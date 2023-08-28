import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Line from '../Line';
import {colors} from '../../utils/colors';

const getSubtitle = (subtaskCount, defaultSubTask) => {
  const totalCount = subtaskCount + (defaultSubTask ? 1 : 0);
  return `${totalCount} Subtasks`;
};

const getLineColor = priority => {
  switch (priority) {
    case 'Low':
      return colors.green;
    case 'Medium':
      return colors.yellow;
    case 'High':
      return colors.red;
    default:
      return colors.pink;
  }
};
const Card = ({todo, navigation}) => {
  const subtitle = getSubtitle(todo.subtasks.length, todo.defaultSubTask);
  const lineColor = getLineColor(todo.priority);
  const openTaskDetail = () => {
    navigation.navigate('TaskDetail', {todo});
  };
  return (
    <TouchableOpacity onPress={openTaskDetail}>
      <View style={styles.card}>
        <View style={styles.textGroup}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {todo.mainTaskName}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <Line style={styles.line} color={lineColor} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
