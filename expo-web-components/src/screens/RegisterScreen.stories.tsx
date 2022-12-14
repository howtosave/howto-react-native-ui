import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RegisterScreen from './RegisterScreen';

const RegisterScreenMeta: ComponentMeta<typeof RegisterScreen> = {
  title: 'Screens/Register',
  component: RegisterScreen,
  argTypes: {},
  args: {},
};

export default RegisterScreenMeta;

type Story = ComponentStory<typeof RegisterScreen>;

export const Basic: Story = (args) => (
  <SafeAreaProvider>
    <RegisterScreen {...args} />
  </SafeAreaProvider>
);
Basic.args = {};
