import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {colors} from '../../utils/colors';

const Input = ({
  isPassword = false,
  onChangeText,
  placeholder,
  style,
  ...props
}) => {
  return (
    <StyledTextInput
      placeholder={placeholder}
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
      style={style} // No need to wrap in an array, as styled component automatically merges styles
      {...props}
    />
  );
};

const StyledTextInput = styled.TextInput`
  width: 80%;
  border-radius: 20px;
  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  height: 40px;
  padding: 8px 10px;
  background-color: ${colors.white};
`;

export default React.memo(Input);
