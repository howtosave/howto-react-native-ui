import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FlexLayoutTestView = () => {
  return (
    <View data-id="FlexLayoutTestViewID" style={{ flex: 1, borderWidth: 2, borderColor: 'red', padding: 20 }}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
    </View>
  );
}

const FlexLayoutTestViewMeta: ComponentMeta<typeof FlexLayoutTestView> = {
  title: "FlexLayoutTestView",
  component: FlexLayoutTestView,
  argTypes: {
  },
  args: {
  },
};

export default FlexLayoutTestViewMeta;

type Story = ComponentStory<typeof FlexLayoutTestView>;


const Stack = createNativeStackNavigator<{ TestView: undefined}>();
//const Stack = createStackNavigator<{ TestView: undefined }>();

export const WithNavigator: Story = (args) => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestView">
        <Stack.Screen name="TestView" component={FlexLayoutTestView} />
      </Stack.Navigator>
    </NavigationContainer>
);

export const WithoutNavigator: Story = (args) => <FlexLayoutTestView />;
