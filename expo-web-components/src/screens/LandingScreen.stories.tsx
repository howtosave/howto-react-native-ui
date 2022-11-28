import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LandingScreen from './LandingScreen';

const LandingScreenMeta: ComponentMeta<typeof LandingScreen> = {
  title: 'Screens/Landing',
  component: LandingScreen,
  argTypes: {},
  args: {},
};

export default LandingScreenMeta;

type Story = ComponentStory<typeof LandingScreen>;

export const Basic: Story = (args) => (
  <SafeAreaProvider>
    <LandingScreen {...args} />
  </SafeAreaProvider>
);
Basic.args = {};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const WithNavigator: Story = (args) => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
