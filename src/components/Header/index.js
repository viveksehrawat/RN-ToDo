import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Input from '../Input';
import {colors} from '../../utils/colors';

const Header = () => {
  return (
    <StyledHeader>
      <ProfileImageWrapper>
        <StyledImage source={require('../../assets/profile.jpeg')} />
      </ProfileImageWrapper>
      <ProfileContainer>
        <NameContainer>
          <BlackText>Hello</BlackText>
          <RedText>Vivek</RedText>
        </NameContainer>
        <SubHeading>Manage your tasks</SubHeading>
        <StyledInput placeholder="Search.." />
      </ProfileContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImageWrapper = styled.View`
  margin-start: 20px;
  margin-top: 40px;
  background-color: white;
  border-radius: 50px;
  shadow-color: ${colors.yellow};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 6px;
  elevation: 5;
`;

const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const ProfileContainer = styled.View`
  flex-direction: column;
  margin-left: 20px;
  margin-top: 50px;
`;

const NameContainer = styled.View`
  flex-direction: row;
`;

const BlackText = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
`;

const RedText = styled.Text`
  color: ${colors.red};
  font-size: 25px;
  font-weight: bold;
`;

const SubHeading = styled.Text`
  color: ${colors.grey};
  font-size: 12px;
  margin-left: 15px;
`;

const StyledInput = styled(Input)`
  border-color: black;
  border-radius: 10px;
  margin-top: 8px;
  margin-left: 10px;
  padding: 8px;
  width: 200px;
  height: 28px;
`;

export default Header;
