import React from 'react';
import Splash from '../screens/auth/Splash';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TodoList from '../screens/home/TodoList';
import TaskDetail from '../screens/home/TaskDetail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
