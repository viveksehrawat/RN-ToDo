import React, {useState} from 'react';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils/colors';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';

const Signup = ({navigation}) => {
  const [values, setValues] = useState({});

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    // setValues(v => ({ ...v, [key]: value }));
  };

  const onSignin = async () => {};

  return (
    <Container>
      <BackButton onBackPress={onBack} />
      <ItemContainer>
        <AuthHeader
          heading="Sign Up!"
          subheading="Lorem ipsum dolor consectetur. Egestas arcu tortor purus. Libero sit arcu sed."
        />
        <StyledInput
          value={values.email}
          onChangeText={v => onChange('email', v)}
          placeholder="Username, Phone Number"
        />

        <StyledInput
          value={values.email}
          onChangeText={v => onChange('email', v)}
          placeholder="Email"
        />

        <StyledInput
          value={values.email}
          onChangeText={v => onChange('password', v)}
          placeholder="Password"
          isPassword={true}
        />
        <ButtonWrapper>
          <Button onPress={onSignin} title="Sign Up" />
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
  margin-top: 40px;
  width: 60%;
`;

export default Signup;
