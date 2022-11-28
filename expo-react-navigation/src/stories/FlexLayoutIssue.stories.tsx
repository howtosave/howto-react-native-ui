import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';

const FlexLayoutTestView = () => {
  return (
    <View style={{ flex: 1, borderWidth: 2, borderColor: 'red', padding: 20 }}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
    </View>
  );
};

const FlexLayoutTestViewMeta: ComponentMeta<typeof FlexLayoutTestView> = {
  title: 'FlexLayoutTestView',
  component: FlexLayoutTestView,
  argTypes: {},
  args: {},
};

export default FlexLayoutTestViewMeta;

type Story = ComponentStory<typeof FlexLayoutTestView>;

const Stack = createNativeStackNavigator<{ TestView: undefined }>();
//const Stack = createStackNavigator<{ TestView: undefined }>();

export const WithNavigator: Story = (_args) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TestView">
      <Stack.Screen name="TestView" component={FlexLayoutTestView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const WithoutNavigator: Story = (_args) => <FlexLayoutTestView />;
