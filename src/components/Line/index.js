import React from 'react';
import styled from 'styled-components/native'; // Import styled-components
import {View} from 'react-native';

const Line = ({color}) => {
  return <StyledLine color={color} />;
};

const StyledLine = styled.View`
  width: 5px;
  background-color: ${props =>
    props.color}; /* Apply the color from the props */
`;

export default Line;
