import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './screens/NewsScreen';
import DetailScreen from './screens/DetailScreen';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="ニュース" component={NewsScreen} />
        <stack.Screen name="詳細ページ" component={DetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
