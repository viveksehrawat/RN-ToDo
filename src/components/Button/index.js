import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

const Button = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <StyledTouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        {
          backgroundColor: backgroundColor || colors.pink,
          width: width || '100%',
          height: height || 40,
        },
        containerStyle,
      ]}>
      <TitleText style={titleStyle}>{title}</TitleText>
    </StyledTouchableOpacity>
  );
};

export default Button;

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: 10px;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  align-items: center;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
`;

const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 16px; /* Default font size */
  font-weight: bold; /* Default font weight */
`;
