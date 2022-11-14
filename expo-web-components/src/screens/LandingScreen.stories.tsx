import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from "./LandingScreen";

const LandingScreenMeta: ComponentMeta<typeof LandingScreen> = {
  title: "Screens/Landing",
  component: LandingScreen,
  argTypes: {
  },
  args: {
  },
};

export default LandingScreenMeta;

type Story = ComponentStory<typeof LandingScreen>;

export const Basic: Story = (args) => <SafeAreaProvider><LandingScreen {...args} /></SafeAreaProvider>;
Basic.args = {
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const WithNavigator: Story = (args) => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
