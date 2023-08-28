import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

const BackButton = ({onBackPress}) => {
  return (
    <Container>
      <CustomTouchableOpacity activeOpacity={0.6} onPress={onBackPress}>
        <Icon name="arrow-back-ios" />
      </CustomTouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  padding: 15px;
  width: 50px;
`;

const CustomTouchableOpacity = styled.TouchableOpacity`
  margin-top: 5px;
`;

const Icon = styled(MaterialIcons)`
  color: ${colors.pink};
  font-size: 40px;
`;

export default BackButton;
