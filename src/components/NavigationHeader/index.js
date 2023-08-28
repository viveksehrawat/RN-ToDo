import React from 'react';
import styled from 'styled-components/native';
import BackButton from '../BackButton';
import {colors} from '../../utils/colors';

const NavigationHeader = ({title, onBackPress}) => {
  return (
    <Container>
      <ItemContainer>
        <BackButton onBackPress={onBackPress} />
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </ItemContainer>
      <Separator />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  height: 100px;
  background-color: white;
`;
const ItemContainer = styled.View`
  flex-direction: row;
  height: 99px;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: ${colors.black};
`;

const Separator = styled.View`
  height: 1px;
  background-color: ${colors.grey};
`;

export default NavigationHeader;
