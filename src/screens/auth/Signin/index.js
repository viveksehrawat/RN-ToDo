import React, {useState} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    // setValues(v => ({ ...v, [key]: value }));
  };

  const onSignin = async () => {
    navigation.navigate('TodoList');
  };

  return (
    <Container>
      <BackButton onBackPress={onBack} />
      <ItemContainer>
        <AuthHeader
          heading="Welcome!"
          subheading="Lorem ipsum dolor consectetur. Egestas arcu tortor purus. Libero sit arcu sed."
        />
        <StyledInput
          value={values.email}
          onChangeText={v => onChange('email', v)}
          placeholder="Username, Phone Number"
        />

        <StyledInput
          value={values.email}
          onChangeText={v => onChange('password', v)}
          placeholder="Password"
          isPassword={true}
        />
        <ButtonWrapper>
          <Button onPress={onSignin} title="Log In" />
        </ButtonWrapper>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 25px;
  background-color: ${colors.white};
`;

const ItemContainer = styled.View`
  background-color: ${colors.white};
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const ButtonWrapper = styled.View`
  margin-top: 30px;
  width: 45%;
`;
export default Signin;
