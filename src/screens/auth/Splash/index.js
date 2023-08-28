import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../utils/colors';
import Button from '../../../components/Button';

const Splash = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <Container>
      <ImageContainer
        resizeMode="contain"
        source={require('../../../assets/splash_image.png')}
      />
      <TitleContainer>
        <Title>Task/Todo List &</Title>
        <Title>Management</Title>
      </TitleContainer>
      <ButtonWrapper>
        <Button onPress={onSignin} title="Log In" />
        <Button
          onPress={onSignup}
          backgroundColor={colors.white}
          titleStyle={{color: colors.pink}}
          title="Sign Up"
        />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const TitleContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const ButtonWrapper = styled.View`
  width: 60%;
`;

export default Splash;
