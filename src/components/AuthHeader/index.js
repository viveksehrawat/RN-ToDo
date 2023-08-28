import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

const AuthHeader = ({heading, subheading}) => {
  return (
    <TitleContainer>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </TitleContainer>
  );
};

const TitleContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  color: ${colors.black};
  font-size: 30px;
  font-weight: bold;
`;

const Subheading = styled.Text`
  color: ${colors.grey};
  font-size: 22px;
  font-weight: 200;
  padding: 25px;
  text-align: center;
`;

export default AuthHeader;
