import React, { memo } from 'react';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  BackButton,
  TextInput,
} from '../components/Basic';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background source={require('./assets/background_dot.png')}>
    <Logo source={require('./assets/logo.png')}/>
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
