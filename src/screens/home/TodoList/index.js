import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import {colors} from '../../../utils/colors';
import {useSelector} from 'react-redux';
import Header from '../../../components/Header';

const TodoList = ({navigation}) => {
  const renderItem = ({item}) => <Card todo={item} navigation={navigation} />;
  const onCreateTask = () => {
    navigation.navigate('TaskDetail');
  };
  useEffect(() => {}, []);
  const todos = useSelector(state => state.tasks);

  return (
    <StyledContainer>
      <Header />
      <StyledFlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Footer>
        <Button
          onPress={onCreateTask}
          backgroundColor={colors.blue}
          title="Create task"
          width="50%"
        />
      </Footer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const StyledFlatList = styled(FlatList)`
  padding: 25px;
`;

const Footer = styled.View`
  height: 80px;
  background-color: ${colors.white};
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: ${colors.blue};
  color: ${colors.pink};
  width: 50%;
`;

export default TodoList;
