import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { FlexLayout } from "./FlexLayout";

const FlexLayoutMeta: ComponentMeta<typeof FlexLayout> = {
  title: "Containers/FlexLayout",
  component: FlexLayout,
  argTypes: {
  },
  args: {
  },
};

export default FlexLayoutMeta;

type Story = ComponentStory<typeof FlexLayout>;

export const Basic: Story = (args) => <FlexLayout {...args} />;
Basic.args = {
  alignCotent: 'flex-start',
  alignItems: 'flex-start',
  // flex: 1,
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  direction: 'ltr',
  child_alignSelf: 'auto',
};

const TestView = () => {
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
    </View>
  );
}

//const Stack = createNativeStackNavigator<{ TestView: undefined}>();
const Stack = createStackNavigator<{ TestView: undefined }>();

export const WithNavigator: Story = (args) => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestView">
        <Stack.Screen name="TestView" component={TestView} />
      </Stack.Navigator>
    </NavigationContainer>
);

export const WithoutNavigator: Story = (args) => <TestView />;
